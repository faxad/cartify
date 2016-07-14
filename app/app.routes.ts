import { provideRouter, RouterConfig } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { ShopItemListComponent } from './shop/shop-item-list/shop-item-list.component';
import { ShopItemDetailComponent } from './shop/shop-item-detail/shop-item-detail.component';
import { ItemCartComponent } from './cart/cart-item-list.component';

const routes: RouterConfig = [
    { path: '', component: ShopItemListComponent },
    { path: 'items', component: ShopItemListComponent },
    { path: 'item/:id', component: ShopItemDetailComponent, canActivate:[AuthGuard] },
    { path: 'cart/:customerId', component: ItemCartComponent }
];

export const appRouterProviders = [
    AuthGuard,
    provideRouter(routes)
];
