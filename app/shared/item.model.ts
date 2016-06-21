import { IItem } from './item.interface';

export class Item implements IItem {
	id: number;
	name: string;
	code: string;
	releaseDate: string;
	description: string;
	unitPrice: number;
	quantityInStock: number;
	rating: number;
	imageUrl: string;
}