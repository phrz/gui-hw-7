import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockAPIService } from './mock-api.service';
import { MovieRepositoryService } from './movie-repository.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
	imports: [ 
		CommonModule,
		InMemoryWebApiModule.forRoot(MockAPIService, { delay: 1000 })
	],
	exports: [],
	declarations: [],
	providers: [
		MockAPIService,
		MovieRepositoryService
	]
})
export class CoreModule {} 