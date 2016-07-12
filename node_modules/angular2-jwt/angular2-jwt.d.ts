import { Http, Request, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
export interface IAuthConfig {
    headerName: string;
    headerPrefix: string;
    tokenName: string;
    tokenGetter: any;
    noJwtError: boolean;
    globalHeaders: Array<Object>;
    noTokenScheme?: boolean;
}
/**
 * Sets up the authentication configuration.
 */
export declare class AuthConfig {
    headerName: string;
    headerPrefix: string;
    tokenName: string;
    tokenGetter: any;
    noJwtError: boolean;
    noTokenScheme: boolean;
    globalHeaders: Array<Object>;
    constructor(config?: any);
    getConfig(): IAuthConfig;
}
/**
 * Allows for explicit authenticated HTTP requests.
 */
export declare class AuthHttp {
    private http;
    private _config;
    tokenStream: Observable<string>;
    constructor(options: AuthConfig, http: Http);
    setGlobalHeaders(headers: Array<Object>, request: Request | RequestOptionsArgs): void;
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>;
    private requestHelper(requestArgs, additionalOptions);
    get(url: string, options?: RequestOptionsArgs): Observable<Response>;
    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response>;
    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response>;
    delete(url: string, options?: RequestOptionsArgs): Observable<Response>;
    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response>;
    head(url: string, options?: RequestOptionsArgs): Observable<Response>;
}
/**
 * Helper class to decode and find JWT expiration.
 */
export declare class JwtHelper {
    urlBase64Decode(str: string): string;
    decodeToken(token: string): any;
    getTokenExpirationDate(token: string): Date;
    isTokenExpired(token: string, offsetSeconds?: number): boolean;
}
/**
 * Checks for presence of token and that token hasn't expired.
 * For use with the @CanActivate router decorator and NgIf
 */
export declare function tokenNotExpired(tokenName?: string, jwt?: string): boolean;
export declare const AUTH_PROVIDERS: any;
