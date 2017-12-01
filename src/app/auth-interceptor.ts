import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
  } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('token');
      if (idToken) {
          const cloned = req.clone({
              headers: req.headers.set('Authorization',
                  'Bearer ' + idToken)
          });
          return next.handle(cloned);
      } else {
          return next.handle(req);
      }
  }
}
