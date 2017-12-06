import { Pipe, PipeTransform } from '@angular/core';

import { IShopItem } from '../../shared/shop-item.interface';

@Pipe({
    name: 'shopItemFilter'
})
export class ShopItemFilterPipe implements PipeTransform {
    transform(value: IShopItem[], args: string): IShopItem[] {
        let filter: string = args ? args.toLocaleLowerCase() : null;
        return filter ? value.filter((shopItem: IShopItem) =>
            shopItem.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
