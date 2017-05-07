import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({ 
	selector: '[yearValidator][ngModel]',
	providers: [
		{ provide: NG_VALIDATORS, useExisting: forwardRef(() => YearValidatorDirective), multi: true }
	]
})
export class YearValidatorDirective implements Validator {

	constructor() {}

	validate(c: AbstractControl) {
		let pattern = /(?:(?:19|20)[0-9]{2})/

		if(pattern.test(c.value)) {
			return null; // empty error object (valid)
		}
		// by default return error object (invalid)
		return { validateYear: { valid: false } };
	}
}