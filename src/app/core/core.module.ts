import { NgModule } from '@angular/core';

import { AuthService } from '../core/services/auth.service';
import { CartService } from '../core/services/cart.service';
import { ShopService } from '../core/services/shop.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { UrlHelperService } from 'angular-oauth2-oidc';

@NgModule({
    imports: [],
    declarations: [],
    providers: [
        UrlHelperService,
        OAuthService,
        AuthService,
        CartService,
        ShopService
    ]
})
export class CoreModule { }
