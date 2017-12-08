import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemCartComponent } from './cart-item-list.component';

const routes: Routes = [
    { path: ':customerId', component: ItemCartComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CartRoutingModule {}
