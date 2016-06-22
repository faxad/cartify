import { PipeTransform, Pipe } from '@angular/core'

import { IShopItem } from '../shop-item.interface'

@Pipe({
	name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {
	transform(value: IShopItem[], args: string): IShopItem[] {
		let filter: string = args ? args.toLocaleLowerCase() : null;
		return filter ? value.filter((item: IShopItem) =>
			item.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
	}
}