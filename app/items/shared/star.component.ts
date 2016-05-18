import { Component, Input, Output,
	     EventEmitter, OnChanges } from '@angular/core'


@Component({
	selector: 'stars',
	templateUrl: 'app/items/shared/star.component.html',
	styleUrls: ['app/items/shared/star.component.css'],
})
export class StarComponent implements OnChanges {
	starWidth: number;
	@Input() rating: number;
	@Output() ratingClicked: EventEmitter<string> =
		new EventEmitter<string>();

	ngOnChanges(): void {
		this.starWidth = this.rating * 86 /5;
	}

	onClick() {
		this.ratingClicked.emit(`Rating ${this.rating} clicked!`);
	}
}