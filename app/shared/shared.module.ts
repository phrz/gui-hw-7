import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RatingComponent } from './rating/rating.component';
import { ValidationMessagesComponent } from './validation-messages.component';
import { YearValidatorDirective } from './validators/year-validator.directive';

@NgModule({
	imports: [ 
		BrowserModule
	],
	declarations: [ 
		RatingComponent, 
		ValidationMessagesComponent, 
		YearValidatorDirective 
	],
	exports: [
		RatingComponent, 
		ValidationMessagesComponent, 
		YearValidatorDirective
	]
})

export class SharedModule { }