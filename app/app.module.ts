import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CoreModule }    from './core/core.module';
import { RouterModule }  from '@angular/router';
import { MoviesModule }  from './movies/movies.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockAPIService } from './core/mock-api.service';

@NgModule({
	imports: [
		CoreModule,
		BrowserModule,
		MoviesModule,
		RouterModule,
		InMemoryWebApiModule.forRoot(MockAPIService, { delay: 1000 })
	],
	declarations: [
		AppComponent
	],
	bootstrap: [ AppComponent ]
})

export class AppModule {}