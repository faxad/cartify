import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';

import { IUser } from '../../auth';
import { IAuthService } from '../contracts/auth-service.interface';

const jwtHelper = new JwtHelper()
const TOKEN_KEY = 'token'
const UNKNOWN_USER: IUser = {
    username: undefined
}

@Injectable()
export class AuthService implements IAuthService {
    private subject = new BehaviorSubject(UNKNOWN_USER);
    public user$: Observable<IUser> = this.subject.asObservable();

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        if (this.isLoggedIn()) {
            // TODO: replace with actual users
            this.subject.next({'username': 'fawad'})
        }
    }

    private get token(): any {
        const token = localStorage.getItem(TOKEN_KEY);
        return token ? jwtHelper.decodeToken(token) : null
    }

    private get tokenExpiration(): any {
        return this.token ? moment.unix(this.token.exp) : null;
    }

    get authenticatedUserId(): string {
        try {
            if (tokenNotExpired(TOKEN_KEY)) {
                return this.token.userId;
            } else {
                return;
            }
        } catch (e) {
            console.log(e)
        }
    }

    isUserAdmin(): boolean {
        return this.token ? this.token.scope.includes('admin') : false
    }

    isLoggedIn(): boolean {
        const expiration = this.tokenExpiration;
        return expiration ? moment().isBefore(expiration) : false;
    }

    login(username: string, password: string ): Observable<any> {
        return this.http.post<any>('login', {
                'username': username,
                'password': password
            })
            .do(res => localStorage.setItem(TOKEN_KEY, res[TOKEN_KEY]))
            .do(() => this.subject.next({'username': username}))
            .shareReplay(); // TODO: check .publishLast().refCount()
    }

    logout() {
        localStorage.removeItem(TOKEN_KEY);
        this.subject.next(UNKNOWN_USER);
        this.router.navigateByUrl('/items');
    }
}
