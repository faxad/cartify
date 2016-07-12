import { IShopItem } from '../shared/shop-item.interface';

export class ShopItem implements IShopItem {
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