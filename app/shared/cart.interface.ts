import { IItem } from './item.interface';


export interface ICart {
	userId: string;
	item: IItem;
	quantity: number;
	unitPrice: number;
	paid: boolean;
}