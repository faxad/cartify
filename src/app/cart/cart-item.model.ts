import { ICartItem } from '../shared/cart-item.interface';

export class CartItem implements ICartItem {
    _id: string;
    userId: string;
    itemId: string;
    quantity: number;
    unitPrice: number;
}
