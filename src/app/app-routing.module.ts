import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/auth-component';
import { ItemCartComponent } from './cart/cart-item-list.component';
import { ShopItemDetailComponent } from './shop/shop-item-detail/shop-item-detail.component';
import { ShopItemListComponent } from './shop/shop-item-list/shop-item-list.component';

const routes: Routes = [
    { path: '', component: ShopItemListComponent },
    { path: 'items', component: ShopItemListComponent },
    { path: 'item/:id', component: ShopItemDetailComponent },
    { path: 'cart/:customerId', component: ItemCartComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    // TODO: { path: '**', component: NotFoundComponenet }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
