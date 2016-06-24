export interface ICustomerCartItem {
	userId: string;
	itemId: number;
	name: string;
	code: string;
	quantity: number;
	unitPrice: number;
	paid: boolean;
}