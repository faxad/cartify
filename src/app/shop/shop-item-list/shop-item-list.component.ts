import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Params } from '@angular/router';
import { ApplicationRef } from '@angular/core';

import {
    AuthService,
    CartService,
    ShopService,
} from '../../shared/index';

import { FormComponent } from '../shop-item-form/shop-item-form.component';
import { IShopItem } from '../../shared/shop-item.interface';
import { ShopItemFilterPipe } from './shop-item-filter.pipe';
import { BaseError } from '../../error/base-error';
import { NotFoundError } from '../../error/not-found-error';
import { CartItem } from 'app/cart/cart-item.model';
import { ICartItem } from 'app/shared/cart-item.interface';

@Component({
    selector: 'list-item',
    templateUrl: './shop-item-list.component.html',
    styleUrls: ['./shop-item-list.component.css']
})
export class ShopItemListComponent implements OnInit {
    private modalIdentifier = 'shopItemModal';
    private filterBy: string;
    private customerId: string;
    private shopItems: IShopItem[];
    private showLoading = true;

    constructor(
        private shop: ShopService,
        private auth: AuthService,
        private cart: CartService,
        private route: ActivatedRoute,
        private appRef: ApplicationRef
    ) {}

    getShopItems(event: any): void {
        let loggedInUserId = AuthService.getUser();
        let getShopItems = this.shop.getShopItems()

        if (loggedInUserId !== undefined) {
            getShopItems = this.shop.getShopItems(loggedInUserId)
        }

        getShopItems.subscribe(
            shopItems => {
                this.shopItems = shopItems;
                // this.appRef.tick();
            },
            (error: BaseError) => {
                if (error instanceof NotFoundError) {
                    console.log('NOT FOUND');
                } else {
                    throw error;
                }
            },
            () => {
                this.showLoading = false;
            }
        );
    }

    ngOnInit(): void {
        this.getShopItems(null);
        this.customerId = AuthService.getUser();
    }

    updateItemCount(cartItem: ICartItem) {
        // refresh the user interface
        for (let shopItem of this.shopItems) {
            if (shopItem._id === cartItem.itemId) {
                shopItem.cartCount = cartItem.quantity
            }
        }
    }

    addToCart(item: IShopItem): void {

        if (item.cartCount === 0) {
            this.cart.addCartItem(item).subscribe(
                cartItem => {
                    this.updateItemCount(cartItem)
                }
            );
        } else {
            this.cart.getCartItem(
                AuthService.getUser(),
                item._id
            ).subscribe(
                cartItem => {
                    this.cart.increaseCartItemQunatity(cartItem).subscribe(
                        cartItem2 => {
                            this.updateItemCount(cartItem2)
                        }
                    )
                }
            )
        }
    }
}
