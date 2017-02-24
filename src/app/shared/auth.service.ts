import { Injectable, EventEmitter } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';

import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IAuthService } from './auth-service.interface';

const Auth0Lock = require('auth0-lock').default;

@Injectable()
export class AuthService implements IAuthService {
    lock = new Auth0Lock('IcUyRKjbz5MnN4G377fcugQZR6BjyncA', 'fawad.auth0.com', {});
    
    constructor(private router: Router, private appRef: ApplicationRef) {
        this.lock.on("authenticated", (authResult) => {
            localStorage.setItem('id_token', authResult.idToken);
            this.lock.getProfile(authResult.idToken, (error, profile) => {
                localStorage.setItem('profile', JSON.stringify(profile));
                this.router.navigate(['/items', { reload: 'yes' }]);
                this.appRef.tick()
            });
        });
    }
 
    login(): void {
        this.lock.show();
    }

    logout(): void {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.appRef.tick()
    }

    isLoggedIn(): boolean {
        //return true; //TODO: Remove!
         return tokenNotExpired();
    }

    isUserAdmin(): boolean {
        return true; //TODO: Remove!

        // try {
        //   return JSON.parse(
        //     localStorage.getItem('profile')
        //   )['role'] == 'admin' ? true : false;
        // } catch(e) {
        //       return false;
        // }
    }

    static getUser(): string {
        try{
            return JSON.parse(localStorage.getItem(
                'profile'))['user_id'].split("|").pop()
        } catch(e) {
            console.log('please log in!')
        }
    }
}