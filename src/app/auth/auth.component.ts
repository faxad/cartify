import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'core';
import { CustomError } from 'app/error/custom-error';

@Component({
    selector: 'app-login',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class LoginComponent {
    public logInForm: FormGroup;
    public hide;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.logInForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const val = this.logInForm.value;

        if (val.email && val.password) {
            this.authService.login(val.email, val.password)
                .subscribe(
                    () => {
                        this.router.navigateByUrl('/items');
                    },
                    (err) => {
                        throw new CustomError(err, 'Unable to log-in')
                    },
                );
        }
    }
}
