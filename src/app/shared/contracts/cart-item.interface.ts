export interface ICartItem {
    _id: string;
    userId: string;
    itemId?: string;
    item?: any;
    quantity: number;
    unitPrice?: number;
    lastModified?: string;
}
