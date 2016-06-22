import { Validators, Control } from '@angular/common';


export class ExtendedValidators implements Validators {
	// validates name
	static nameValidator(control: Control): { [s: string]: boolean } {
		if (!control.value.match(/^abc/)) {
			return { invalidName: true };
		}
	}
}
