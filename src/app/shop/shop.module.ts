import { NgModule } from '@angular/core';
import { CalendarModule, RatingModule } from 'primeng/primeng';
import { SharedModule } from 'shared';

import { ShopItemDetailComponent } from './components/shop-item-detail/shop-item-detail.component';
import { FormComponent } from './components/shop-item-form/shop-item-form.component';
import { ShopItemFilterPipe } from './components/shop-item-list/shop-item-filter.pipe';
import { ShopItemListComponent } from './components/shop-item-list/shop-item-list.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
    imports: [
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
    entryComponents: [
        FormComponent
    ],
    exports: []
})
export class ShopModule { }
