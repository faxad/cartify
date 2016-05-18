import { Component } from '@angular/core';
import { ItemComponent } from './items/item/item.component';


@Component({
	selector: 'app-content',
	template: `
		<item-main></item-main>
	`,
	directives: [ItemComponent] // using component as directive
})
export class AppComponent { }
