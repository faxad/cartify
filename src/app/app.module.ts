import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CalendarModule, RatingModule } from 'primeng/primeng';

import { environment } from '../environments/environment';
import { API_URL } from './api-interceptor';
import { ApiInterceptor } from './api-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth-interceptor';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/auth-component';
import { ItemCartComponent } from './cart/cart-item-list.component';
import { AppErrorHandler } from './error/app-error-handler';
import { AuthService } from './shared/auth.service';
import { CartService } from './shared/cart.service';
import { ShopService } from './shared/shop.service';
import { ShopItemDetailComponent } from './shop/shop-item-detail/shop-item-detail.component';
import { FormComponent } from './shop/shop-item-form/shop-item-form.component';
import { ShopItemFilterPipe } from './shop/shop-item-list//shop-item-filter.pipe';
import { ShopItemListComponent } from './shop/shop-item-list/shop-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopItemListComponent,
    ShopItemDetailComponent,
    ItemCartComponent,
    ShopItemFilterPipe,
    FormComponent,
    LoginComponent
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
    AuthGuard,
    ShopService,
    CartService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: API_URL, useValue: environment.apiUrl },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true, deps: [API_URL] },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
