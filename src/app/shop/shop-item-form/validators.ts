import { Validators, FormControl } from '@angular/forms';

export class ExtendedValidators implements Validators {
    static nameValidator(control: FormControl): { [s: string]: boolean } {
        if (!control.value.match(/^abc/)) {
            return { invalidName: true };
        }
    }
}
