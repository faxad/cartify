import { Component } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';

import { ItemComponent } from './items/item/item.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';


@Component({
	selector: 'app-content',
	directives: [ROUTER_DIRECTIVES, ItemComponent], // using component as directive
	providers: [ROUTER_PROVIDERS],
	template: `
		<nav class="navbar navbar-inverse navbar-fixed-top">
	      <div class="container">
	        <div class="navbar-header">
	          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	            <span class="sr-only">Toggle navigation</span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	            <span class="icon-bar"></span>
	          </button>
	          <a class="navbar-brand" href="#">Project name</a>
	        </div>
	        <div id="navbar" class="collapse navbar-collapse">
	          <ul class="nav navbar-nav">
	            <li class="active"><a href="#">Home</a></li>
	            <li><a [routerLink]="['Items']">Items</a></li>
	          </ul>
	        </div>
	      </div>
	    </nav>
	    <div class="container">
	    	<div class="starter-template">
	    		<br/><br/><br/>
	    		<router-outlet></router-outlet>
	    	</div>
	    </div>
	`,
})
@RouteConfig([
		{ path: '/items', name: 'Items', component: ItemComponent },
		{ path: '/item/:id', name: 'Detail', component: ItemDetailComponent }
])
export class AppComponent { }
