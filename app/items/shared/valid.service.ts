import { Injectable } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, Control, AbstractControl, ControlGroup, Validators } from '@angular/common';


@Injectable()
export class ValidService {
	formToVlidate: ControlGroup;
	stateChecks: { [s: string]: any } = {}
	validityChecks: { [s: string]: any } = {}

	stateCheck(control: AbstractControl, code: string): boolean {
		let checks = {
			//'itemName': control.touched,
		}

		//return (code in checks) ? checks[code] : control.touched
		return (code in this.stateChecks) ? this.stateChecks[code] : control.touched

	}

	validityCheck(control: AbstractControl, code: string): { [s: string]: any } {
		// let checks = {
		// 	'itemName': {
		// 		'condition': control.hasError('invalidName'),
		// 		'message': 'Name must start with abc'
		// 	}
		// }[code]

		// return {
		// 	"result": checks['condition'],
		// 	"message": checks['message']
		// }
		return {
			"result": control.hasError(
				this.validityChecks[code]['condition']),
			"message": this.validityChecks[code]['message']
		}
	}

	check(control: string): { [s: string]: any } {
		let c = this.formToVlidate.controls[control];
		console.log(c);
		if (this.stateCheck(c, control)) {
			return (c.hasError('required')) ? {
				"result": true,
				"message": "Required Field!"
			} : this.validityCheck(c, control);
		}
		else {
			return { "result": false, "message": "" }
		}
	}

	configure(form: ControlGroup) {
		this.formToVlidate = form;
	}
}
