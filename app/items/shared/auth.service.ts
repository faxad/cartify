import { Injectable, EventEmitter, ChangeDetectorRef } from '@angular/core';

import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// We want to avoid any 'name not found'
// warnings from TypeScript
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
    auth0Lock: any;

    constructor(private changeDetector: ChangeDetectorRef) { 
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
            if (d) {} // TODO: something here to be added

            this.changeDetector.detectChanges();
        },
        e => console.log('error occured'))
    }

    logout(): void {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.changeDetector.detectChanges();
    }

    isLoggedIn(): boolean {
        return true; //TODO: Remove!
        
        // return tokenNotExpired();
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
}