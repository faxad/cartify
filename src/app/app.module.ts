import '../polyfills';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { CoreModule } from './core/core.module';
import { AppErrorHandler } from './error/app-error-handler';
import { API_URL, ApiInterceptor } from './interceptors/api.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    MaterialModule
  ],
  providers: [
    AuthGuard,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: API_URL, useValue: environment.apiUrl },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true, deps: [API_URL] },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
