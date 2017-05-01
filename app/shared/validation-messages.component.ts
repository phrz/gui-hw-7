import { Component, Input } from '@angular/core';

@Component({
	selector: 'validation-messages',
	template: 
`
<div 
 class="alert alert-danger" role="alert"
 *ngIf="field.touched && field.errors"
>
	<ul>
		<li *ngFor="let validator of validators">
			{{ validator | json }}
		</li>
	</ul>
</div>
`
})
export class ValidationMessagesComponent {

	private validators: object[] = [];

	@Input() field: any;
	@Input() set messages(newValidators: object) {
		this.validators = [];
		Object.keys(newValidators).forEach(k => {
			this.validators.push({ validator: k, message: newValidators[k] });
		});
	}
}