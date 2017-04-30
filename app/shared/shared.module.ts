import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RatingComponent } from './rating/rating.component';

@NgModule({
	imports: [ 
		BrowserModule
	],
	declarations: [
		RatingComponent
	],
	exports: [
		RatingComponent
	]
})

export class SharedModule { }