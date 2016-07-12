import { ICartItem} from '../shared/cart-item.interface';

export class CartItem implements ICartItem {
	userId: string;
	itemId: number;
	quantity: number;
	unitPrice: number;
	paid: boolean;
}