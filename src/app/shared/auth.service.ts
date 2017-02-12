import { Injectable, EventEmitter } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';

import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IAuthService } from './auth-service.interface';

declare var Auth0Lock: any; // to avoid warning from TS
//let Auth0Lock = require('auth0-lock').default;

@Injectable()
export class AuthService implements IAuthService {
    auth0Lock: any;
    
    constructor(private router: Router, private appRef: ApplicationRef) {
         this.auth0Lock = new Auth0Lock(
            'IcUyRKjbz5MnN4G377fcugQZR6BjyncA', 'fawad.auth0.com');
    }

    initiateAuth0LogIn() {
        return Observable.create(observer => {
            this.auth0Lock.show((error: string, profile: Object, id_token: string) => {
                if (error) { console.log(error); }

                localStorage.setItem('profile', JSON.stringify(profile));
                localStorage.setItem('id_token', id_token);
                observer.next(true);
                observer.complete();
            });
        });
    }
 
    login(): void {
        this.initiateAuth0LogIn().subscribe((d) => {
            if (d) {
                this.router.navigate(['/items', { reload: 'yes' }]);
            } // TODO: something here to be added
            this.appRef.tick()            
        },
        e => console.log('error occured'))
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
                'profile'))['identities'][0]['user_id']
        } catch(e) {
            console.log('please log in!')
        }
    }
}