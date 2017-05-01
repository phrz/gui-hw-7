import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { MovieListComponent } from './movie-list/movie-list.component';

var routes = [
	{
		path: '',
		component: MovieListComponent
	},
	{
		path: 'add',
		component: MovieEditorComponent
	},
	{
		path: 'edit/:id',
		component: MovieEditorComponent
	}
];

@NgModule({
	imports: [ 
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes),
		FormsModule,
		SharedModule
	],
	declarations: [
		MovieListComponent,
		MovieEditorComponent
	],
	exports: [
		MovieListComponent
	],
	providers: []
})

export class MoviesModule {}