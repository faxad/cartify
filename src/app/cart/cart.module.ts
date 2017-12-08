import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ItemCartComponent } from './cart-item-list.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [
    CartRoutingModule,
    SharedModule
  ],
  declarations: [
    ItemCartComponent
  ]
})
export class CartModule { }
