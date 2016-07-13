import { CanActivate }    from '@angular/router';

import { tokenNotExpired } from 'angular2-jwt';

export class AuthGuard implements CanActivate {
  canActivate() {
  	return true
    //return tokenNotExpired();
  }
}