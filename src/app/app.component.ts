import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { AuthService } from './core/services/auth.service';

import { AuthConfig } from 'angular-oauth2-oidc';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';

let authConfig: AuthConfig = {

    // Url of the Identity Provider
    issuer: 'http://localhost:5000',

    // URL of the SPA to redirect the user to after login
    // redirectUri: window.location.origin + '/',
    redirectUri: 'http://localhost:4200',

    // The SPA's id. The SPA is registerd with this id at the auth-server
    clientId: 'client_003',

    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile api',
  }

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public isLoggedIn$: Observable<boolean>;

    constructor(
      private auth: AuthService,
      private titleService: Title,
      private oauthService: OAuthService
    ) {
        this.titleService.setTitle('Cartify');
        this.configureWithNewConfigApi();
    }

    private configureWithNewConfigApi() {
        this.oauthService.configure(authConfig);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
      }

    ngOnInit(): void {
        this.isLoggedIn$ = this.auth.user$
          .map(user => user.username !== undefined);
    }

    logout(): void {
      this.auth.logout();
    }

    public login() {
        this.oauthService.initImplicitFlow();
    }
}
