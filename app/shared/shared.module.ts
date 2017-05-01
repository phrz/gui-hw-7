import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RatingComponent } from './rating/rating.component';
import { ValidationMessagesComponent } from './validation-messages.component';

@NgModule({
	imports: [ 
		BrowserModule
	],
	declarations: [
		RatingComponent, ValidationMessagesComponent
	],
	exports: [
		RatingComponent, ValidationMessagesComponent
	]
})

export class SharedModule { }