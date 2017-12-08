import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';

import { IAuthService } from '../contracts/auth-service.interface';

const jwtHelper = new JwtHelper()
const TOKEN = 'token'

@Injectable()
export class AuthService implements IAuthService {
    constructor(
        private router: Router,
        private http: HttpClient
    ) {}

    getAuthenticatedUserId(): string {
        try {
            if (tokenNotExpired(TOKEN)) {
                const token = localStorage.getItem(TOKEN);
                return jwtHelper.decodeToken(token).userId;
            } else {
                return;
            }
        } catch (e) {
            console.log(e)
        }
    }

    isUserAdmin(): boolean {
        return true;
    }

    login(username: string, password: string ): Observable<any> {
        return this.http.post<any>('login', {
                'username': username,
                'password': password
            })
            .do(res => localStorage.setItem(TOKEN, res[TOKEN]))
            .shareReplay();
    }

    logout() {
        localStorage.removeItem(TOKEN);
        this.router.navigateByUrl('/');
    }

    isLoggedIn(): boolean {
        const expiration = this.getExpiration()
        return expiration ? moment().isBefore(expiration) : false;
    }

    getExpiration() {
        const token = localStorage.getItem(TOKEN);
        return token ? moment.unix(jwtHelper.decodeToken(token).exp) : null;
    }
}
