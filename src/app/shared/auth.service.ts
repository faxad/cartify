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
    lock = new Auth0Lock('IcUyRKjbz5MnN4G377fcugQZR6BjyncA', 'fawad.auth0.com', {
        auth: {
            redirect: true,
            sso: false
        }
    });

    static getUser(): string {
        try {
            if (!tokenNotExpired('id_token')) { return; }
            return JSON.parse(localStorage.getItem(
                'profile'))['user_id'].split('|').pop();
        } catch (e) {
            console.log('please log in!');
        }
    }
    
    constructor(private router: Router, private appRef: ApplicationRef) {
        this.lock.on('authenticated', (authResult) => {
            localStorage.setItem('id_token', authResult.idToken);
            this.lock.getProfile(authResult.idToken, (error, profile) => {
                localStorage.setItem('profile', JSON.stringify(profile));
                this.navigateToHome();
                this.appRef.tick();
            });
        });
    }

    login(): void {
        this.lock.show();
    }

    logout(): void {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.navigateToHome();
    }

    isLoggedIn(): boolean {
         return tokenNotExpired('id_token');
    }

    isUserAdmin(): boolean {
        try {
          return JSON.parse(
            localStorage.getItem('profile')
          )['role'] === 'admin' && this.isLoggedIn() ? true : false;
        } catch (e) {
              return false;
        }
    }

    navigateToHome(): void {
        let params = this.router.url === '/items' ? ['/items', {
            reload: 'yes' }] : ['/items'];

        this.router.navigate(params);
    }
}
