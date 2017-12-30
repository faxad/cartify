import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate() {
        // TODO: Redirect to log-in or permission denied page
        return tokenNotExpired();
    }
}
