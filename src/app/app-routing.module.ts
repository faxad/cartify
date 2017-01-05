import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth.guard';
import { ShopItemListComponent } from './shop/shop-item-list/shop-item-list.component';
import { ShopItemDetailComponent } from './shop/shop-item-detail/shop-item-detail.component';
import { ItemCartComponent } from './cart/cart-item-list.component';

const routes: Routes = [
    { path: '', component: ShopItemListComponent },
    { path: 'items', component: ShopItemListComponent },
    { path: 'item/:id', component: ShopItemDetailComponent }, //canActivate:[AuthGuard]
    { path: 'cart/:customerId', component: ItemCartComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    //AuthGuard,
    RouterModule
  ]
})
export class AppRoutingModule {}
