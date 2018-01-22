import { IShopItemReview } from './shop-item-review.interface';

export interface IShopItem {
    _id: string;
    name: string;
    code: string;
    category: string;
    releaseDate: Date;
    description: string;
    unitPrice: number;
    quantityInStock: number;
    rating: number;
    imageUrl: string;
    reviews?: IShopItemReview[];
    reviewsCount?: number;
    cartCount?: number;
}
