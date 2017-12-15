import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'core';

@Component({
    selector: 'login',
    template: `
    <div class="row row-offset-top-10">
        <div class="col-md-4 "></div>
        <div class="col-md-4 ">
            <form [formGroup]="logInForm" class="form-horizontal">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-4 control-label">Username</label>
                    <div class="col-sm-8">
                    <input type="email" class="form-control" id="email" placeholder="Email" formControlName="email" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-4 control-label">Password</label>
                    <div class="col-sm-8">
                    <input type="password" class="form-control" name="password" placeholder="Password" formControlName="password" required>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-4 col-sm-10">
                    <div class="checkbox">
                        <label>
                        <input type="checkbox"> Remember me
                        </label>
                    </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-4 col-sm-10">
                    <button class="btn btn-default" (click)="login()">Sign in</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-4"></div>
    </div>`
})
export class LoginComponent {
    logInForm: FormGroup;

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
                        console.log('User is logged in');
                        this.router.navigateByUrl('/items');
                    }
                );
        }
    }
}
