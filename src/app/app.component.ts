import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { AuthService } from './core/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
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
        this.isLoggedIn$ = this.auth.user$
          .map(user => user.username !== undefined);
    }

    logout(): void {
      this.auth.logout();
    }
}
