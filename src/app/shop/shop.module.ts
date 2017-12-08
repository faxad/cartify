import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule, RatingModule } from 'primeng/primeng';

import { SharedModule } from '../shared/shared.module';
import { ShopItemDetailComponent } from './shop-item-detail/shop-item-detail.component';
import { FormComponent } from './shop-item-form';
import { ShopItemFilterPipe, ShopItemListComponent } from './shop-item-list';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule,
    RatingModule,
    SharedModule,
    ShopRoutingModule
  ],
  declarations: [
    FormComponent,
    ShopItemFilterPipe,
    ShopItemDetailComponent,
    ShopItemListComponent,
  ],
  exports: []
})
export class ShopModule { }
