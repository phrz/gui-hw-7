import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '../api/movie';
import { MovieRepository } from '../api/movie-repository.service';

@Component({
	selector: 'movie-editor',
	templateUrl: 'movie-editor.component.html',
	styles: [ require('./movie-editor.component.css').toString() ],
})
export class MovieEditorComponent implements OnInit, OnDestroy {

	private id: number;
	private title: string;
	private isNew: boolean;
	private movie: Movie;
	private sub: any;

	constructor(private movieRepository: MovieRepository, 
				private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'] || null;
			this.idDidChange();
		});
	}

	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}

	idDidChange(): void {
		this.isNew = (this.id == null);
		if(this.isNew) {
			this.movie = new Movie();
			this.title = 'New Movie';
		} else {
			// COPY, not reference.
			this.movie = {... this.movieRepository.get(this.id)};
			this.title = 'Edit Movie: ' + this.movie.title;
		}
	}

	saveChanges() {
		console.log('MovieEditorComponent.saveChanges');
		if(this.isNew) {
			this.movieRepository.add(this.movie);
		} else {
			this.movieRepository.update(this.movie);
		}
	}
}
