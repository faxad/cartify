import { ICart} from './cart.interface';
import { IItem} from './item.interface';


export class Cart implements ICart {
	userId: string;
	itemId: number;
	quantity: number;
	unitPrice: number;
	paid: boolean;
}