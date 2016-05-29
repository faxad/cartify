import { IItem } from './item.interface';


export interface ICart {
	userId: string;
	item: IItem;
	quantity: number;
	netPrice: number;
	paid: boolean;
}