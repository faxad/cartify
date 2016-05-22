import { PipeTransform, Pipe } from '@angular/core'

import { IItem } from '../shared/item.interface'

@Pipe({
	name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {
	transform(value: IItem[], args: string): IItem[] {
		let filter: string = args ? args.toLocaleLowerCase() : null;
		return filter ? value.filter((item: IItem) =>
			item.itemName.toLocaleLowerCase().indexOf(filter) != -1) : value;
	}
}