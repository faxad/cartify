import { Component, Input } from '@angular/core';

import { ItemService } from '../shared/item.service';
import { IItem } from '../shared/item.interface';

@Component({
	selector: 'update-item',
	templateUrl: 'app/items/item-update/item-update.component.html',
})
export class ItemUpdateComponent {
	@Input() item: IItem;
}