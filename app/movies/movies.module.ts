import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRepository } from './api/movie-repository.service';

import { MockAPIService } from './api/mock-api.service';

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
  imports:      [ 
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(MockAPIService, { delay: 1000 }),
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
  providers: [
      MovieRepository
  ]
})

export class MoviesModule {}