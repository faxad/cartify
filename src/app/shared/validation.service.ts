import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable()
export class ValidationService {
	formToVlidate: FormGroup;
	stateChecks: { [key: string]: string } = {}
	validityChecks: { [key: string]: string } = {}

	stateCheck(control: AbstractControl, code: string): boolean {
		return (code in this.stateChecks) ? control[
			this.stateChecks[code]] : control.touched
	}

	validityCheck(control: AbstractControl, code: string): { [key: string]: any } {
		let check = this.validityChecks[code];

		return check ? {
			"result": control.hasError(
				check['condition']),
			"message": check['message']
		} : { "result": false, "message": "" }
	}

	check(controlName: string): { [key: string]: any } {
		let control = this.formToVlidate.controls[controlName];

		if (this.stateCheck(control, controlName)) {
			return (control.hasError('required')) ? {
				"result": true,
				"message": "Required Field!"
			} : this.validityCheck(control, controlName);
		}
		else { return { "result": false, "message": "" } }
	}

	configure(form: FormGroup, validityChecks, stateChecks) {
		this.formToVlidate = form;
		this.validityChecks = validityChecks;
		this.stateChecks = stateChecks;
	}
}
