import { Observable } from 'rxjs';

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './core/services/auth.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-content',
    template: `
     <div>
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a [routerLink]="['/items']" class="navbar-brand">
                  <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true">Cartify</span>
              </a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <form class="navbar-form navbar-right">
                <a [routerLink]="['/login']" *ngIf="!(isLoggedIn$ | async)"class="btn btn-success btn-sm" role="button">
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Sign In
                </a>
                <button (click)="logout()" *ngIf="isLoggedIn$ | async" class="btn btn-success btn-sm">
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Sign Out
                </button>
              </form>
            </div><!--/.navbar-collapse -->
          </div>
        </nav>
        <div class="container">
                <br/><br/><br/>
                <router-outlet></router-outlet>
        </div>
        </div>
    `,
})
export class AppComponent implements OnInit {
    private isLoggedIn$: Observable<boolean>;

    constructor(
      private auth: AuthService,
      private titleService: Title
    ) {
        this.titleService.setTitle('Cartify');
    }

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
        this.isLoggedIn$ = this.auth.user$.map(user => user.username !== undefined);
    }

    logout(): void {
      this.auth.logout();
    }
}
