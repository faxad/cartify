import { ICart} from './cart.interface';
import { IItem} from './item.interface';


export class Cart implements ICart {
	userId: string;
	item: IItem;
	quantity: number;
	unitPrice: number;
	paid: boolean;
}