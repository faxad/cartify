import { Validators, FormControl } from '@angular/forms';

export class ShopItemFormValidators implements Validators {
    static nameValidator(control: FormControl): { [s: string]: boolean } {
        if (control.value && !control.value.match(/^[A-Z]/)) {
            return { invalidName: true };
        }
    }
}
