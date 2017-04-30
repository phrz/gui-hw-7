import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Movie } from './movie';

import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieRepository {

	@Output()
	didUpdate: EventEmitter<Movie[]> = new EventEmitter();

	private _didLoadMovies: boolean = false;
	private _movies: Movie[];

	private getIndex(id: number) {
		for (let i = this._movies.length; i--;) {
			let movie = this._movies[i];
			if (movie.id === id) return i;
		}
		return -1;
	}

	constructor(private http: Http) {
		this._movies = [];
	}

	broadcastMovies(movies: Movie[]) {
		this.didUpdate.emit(movies);
	}

	public load() {
		return this.http.get('api/movies').map(this.extractData).map(movies => {
			this._didLoadMovies = true;
			this._movies = movies;
			return movies;
		}).catch(this.handleError)
		.subscribe(movies => this.broadcastMovies(movies));
	}

	private extractData(res: Response): Movie[] {
		return (<Movie[]>res.json().data) || [new Movie()];
	}

	private handleError(err: any, caught: Observable<any>) {
		console.error(err);
		return caught;
	}

	public get(id: number) : Movie {
		let index = this.getIndex(id);
		return this._movies[index];
	}

	public add(movie: Movie) {
		return this.http.post(`api/movies`, movie).map(_ => {
			movie.id = this._movies.length + 1;
			this._movies.push(movie);
			return this._movies;
		}).subscribe(movies => this.broadcastMovies(movies));
	}

	public update(movie: Movie) {
		return this.http.put(`api/movies/${movie.id}`, movie).map(_ => {
			let index = this.getIndex(movie.id);
			this._movies[index] = movie;
			return this._movies;
		}).subscribe(movies => this.broadcastMovies(movies));
	}

	public delete(id: number) {
		return this.http.delete(`api/movies/${id}`).map(_ => {
			let index = this.getIndex(id);
			this._movies.splice(index, 1);
			return this._movies;
		}).subscribe(movies => this.broadcastMovies(movies));
	}
}
