import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';

export const API_URL = new InjectionToken<string>('apiUrl');

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(@Inject(API_URL) private apiUrl: string) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //console.log(req.url.indexOf('5000') !== -1)

        if (req.url.indexOf('5000') === -1) {
            req = req.clone({
                url: this.apiUrl + req.url
            });
        }

        return next.handle(req);
    }
}
