import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';
//import { ROUTER_DIRECTIVES } from '@angular/router';
//import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';

import { ShopItemListComponent } from './shop/shop-item-list/shop-item-list.component';
import { ShopItemDetailComponent } from './shop/shop-item-detail/shop-item-detail.component';
import { ItemCartComponent } from './cart/cart-item-list.component';
import { AuthService } from './shared/auth.service';

@Component({
	selector: 'app-content',
	//directives: [ROUTER_DIRECTIVES], // using component as directive
	//providers: [HTTP_PROVIDERS, AuthService],
  //providers: [AuthService],
	//precompile: [ShopItemListComponent, ShopItemDetailComponent, ItemCartComponent],
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
