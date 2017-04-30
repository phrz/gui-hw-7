import { Component, Input, forwardRef } from '@angular/core';

@Component({
	selector: 'rating',
	templateUrl: 'rating.component.html',
	styles: [ require('./rating.component.css').toString() ]
})

export class RatingComponent { 

	@Input()
	model: number;
	
}