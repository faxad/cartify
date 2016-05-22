import { IItem } from './item.interface';


export class Item implements IItem {
	itemId: number;
	itemName: string;
	itemCode: string;
	releaseDate: string;
	description: string;
	price: number;
	quantity: number;
	starRating: number;
	imageUrl: string;
}