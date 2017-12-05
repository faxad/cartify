import 'rxjs/Rx';

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AuthService } from './shared/auth.service';

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
              <a class="navbar-brand" href="#">
                  <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true">Cartify</span>
              </a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <form class="navbar-form navbar-right">
                <button (click)="auth.login()" *ngIf="!auth.isLoggedIn()" class="btn btn-success btn-sm">
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span> Sign In
                </button>
                <button (click)="auth.logout()" *ngIf="auth.isLoggedIn()" class="btn btn-success btn-sm">
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
export class AppComponent {
    constructor(private auth: AuthService, private titleService: Title) {
        this.titleService.setTitle('Cartify');
    }
}
