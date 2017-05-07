import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockAPIService } from './mock-api.service';
import { MovieRepositoryService } from './movie-repository.service';

@NgModule({
	imports: [ 
		CommonModule
	],
	exports: [],
	declarations: [],
	providers: [
		MockAPIService,
		MovieRepositoryService
	]
})
export class CoreModule {} 