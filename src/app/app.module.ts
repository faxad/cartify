import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';

import { ShopItemListComponent } from './shop/shop-item-list/shop-item-list.component';
import { ShopItemDetailComponent } from './shop/shop-item-detail/shop-item-detail.component';
import { ItemCartComponent } from './cart/cart-item-list.component';
import { FormComponent } from './shop/shop-item-form/shop-item-form.component';
import { ShopItemFilterPipe } from './shop/shop-item-list//shop-item-filter.pipe';

import { AuthService } from './shared/auth.service';
import { CartService } from './shared/cart.service';
import { ShopService } from './shared/shop.service';
import { AppErrorHandler } from './error/app-error-handler';

import { AppRoutingModule } from './app-routing.module';
import { CalendarModule, RatingModule } from 'primeng/primeng';

import { API_URL } from './api-interceptor'
import { environment } from '../environments/environment'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './api-interceptor';

@NgModule({
  declarations: [
    AppComponent, ShopItemListComponent, ShopItemDetailComponent, ItemCartComponent, ShopItemFilterPipe, FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CalendarModule,
    RatingModule,
  ],
  providers: [
    AuthService,
    ShopService,
    CartService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: API_URL, useValue: environment.apiUrl },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true, deps: [API_URL] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
