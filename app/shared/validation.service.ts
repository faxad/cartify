import { Injectable } from '@angular/core';
import { AbstractControl, ControlGroup } from '@angular/common';

@Injectable()
export class ValidationService {
	formToVlidate: ControlGroup;
	stateChecks: { [s: string]: any } = {}
	validityChecks: { [s: string]: any } = {}

	stateCheck(control: AbstractControl, code: string): boolean {
		return (code in this.stateChecks) ? control[
			this.stateChecks[code]] : control.touched
	}

	validityCheck(control: AbstractControl, code: string): { [s: string]: any } {
		let check = this.validityChecks[code];

		return check ? {
			"result": control.hasError(
				check['condition']),
			"message": check['message']
		} : { "result": false, "message": "" }
	}

	check(controlName: string): { [s: string]: any } {
		let control = this.formToVlidate.controls[controlName];

		if (this.stateCheck(control, controlName)) {
			return (control.hasError('required')) ? {
				"result": true,
				"message": "Required Field!"
			} : this.validityCheck(control, controlName);
		}
		else { return { "result": false, "message": "" } }
	}

	configure(form: ControlGroup, validityChecks, stateChecks) {
		this.formToVlidate = form;
		this.validityChecks = validityChecks;
		this.stateChecks = stateChecks;
	}
}
