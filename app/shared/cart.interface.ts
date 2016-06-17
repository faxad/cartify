import { IItem } from './item.interface';


export interface ICart {
	userId: string;
	itemId: number;
	quantity: number;
	unitPrice: number;
	paid: boolean;
}