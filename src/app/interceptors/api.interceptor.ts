import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Observable } from 'rxjs';
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
        req = req.clone({
            url: this.apiUrl + req.url
        });

        return next.handle(req);
    }
}
