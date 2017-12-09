import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopItemDetailComponent } from './components/shop-item-detail/shop-item-detail.component';
import { ShopItemListComponent } from './components/shop-item-list/shop-item-list.component';

const routes: Routes = [
    { path: '', component: ShopItemListComponent },
    { path: ':id', component: ShopItemDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule {}
