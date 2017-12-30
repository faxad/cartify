import { NgModule } from '@angular/core';

import { AuthService } from '../core/services/auth.service';
import { CartService } from '../core/services/cart.service';
import { ShopService } from '../core/services/shop.service';

@NgModule({
    imports: [],
    declarations: [],
    providers: [
        AuthService,
        CartService,
        ShopService
    ]
})
export class CoreModule { }
