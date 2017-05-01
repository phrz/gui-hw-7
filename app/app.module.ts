import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CoreModule }    from './core/core.module';
import { RouterModule }  from '@angular/router';
import { MoviesModule }  from './movies/movies.module';

@NgModule({
	imports: [
		CoreModule, 
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