import { Injectable } from '@angular/core';
import { AbstractControl, ControlGroup } from '@angular/common';


@Injectable()
export class ValidService {
	formToVlidate: ControlGroup;
	stateChecks: { [s: string]: any } = {}
	validityChecks: { [s: string]: any } = {}

	stateCheck(control: AbstractControl, code: string): boolean {
		return (code in this.stateChecks) ? control[
			this.stateChecks[code]] : control.touched
	}

	validityCheck(control: AbstractControl, code: string): { [s: string]: any } {
		let ck = this.validityChecks[code];

		return ck ? {
			"result": control.hasError(
				ck['condition']),
			"message": ck['message']
		} : { "result": false, "message": "" }
	}

	check(control: string): { [s: string]: any } {
		let c = this.formToVlidate.controls[control];
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

	configure(form: ControlGroup, _customValidityChecks, _customStateChecks) {
		this.formToVlidate = form;
		this.validityChecks = _customValidityChecks;
		this.stateChecks = _customStateChecks;
	}
}
