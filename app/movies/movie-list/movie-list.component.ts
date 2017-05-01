import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { MockAPIService } from '../../core/mock-api.service';
import { MovieRepositoryService } from '../../core/movie-repository.service';
import { Movie } from '../../core/movie';

@Component({
	selector: 'movie-list',
	templateUrl: 'movie-list.component.html',
	styles: [ require('./movie-list.component.css').toString() ]
})

export class MovieListComponent implements OnInit { 
	movies: Movie[] = [];
	isLoaded: boolean = false;
	isWorking: boolean = false;

	constructor(private movieRepository: MovieRepositoryService, private router: Router) {}

	ngOnInit() {
		this.movieRepository.didUpdate.subscribe((movies: Movie[]) => this.handleMovies(movies));
		this.movieRepository.load();
	}

	didClickDelete(movie: Movie) {
		this.isWorking = true;
		this.movieRepository.delete(movie.id);
	}

	handleMovies(movies: Movie[]) {
		this.movies = movies; 
		this.isLoaded = true;
		this.isWorking = false;
	}
}