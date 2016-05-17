import { Component } from '@angular/core';
import { ItemListComponent } from './items/item-list.component';


@Component({
	selector: 'app-content',
	template: `
	<div>
		<h3>AJS 2.0 App - {{sampleMsg}}</h3>
		<item></item>
	</div>
	`,
	directives: [ItemListComponent] // using component as directive
})
export class AppComponent { 
	sampleMsg: string = 'Hello World!'; // will be displayed using interpolation
}
