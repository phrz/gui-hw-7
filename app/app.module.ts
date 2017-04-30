import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule } from '@angular/router';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  imports:      [ 
  	BrowserModule,
    MoviesModule,
    RouterModule
  ],
  declarations: [
  	AppComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }