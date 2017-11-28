import { IShopItem } from '../shared/shop-item.interface';

export class ShopItem implements IShopItem {
    _id: string;
    name: string;
    code: string;
    releaseDate: string;
    description: string;
    unitPrice: number;
    quantityInStock: number;
    rating: number;
    imageUrl: string;
}
