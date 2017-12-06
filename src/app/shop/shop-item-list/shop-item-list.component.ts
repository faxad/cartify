import { Component, OnInit } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseError, NotFoundError } from '../../error';
import { ICartItem, IShopItem } from '../../shared';
import { AuthService, CartService, ShopService } from '../../shared/index';

@Component({
    selector: 'list-item',
    templateUrl: './shop-item-list.component.html',
    styleUrls: ['./shop-item-list.component.css']
})
export class ShopItemListComponent implements OnInit {
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
        let userId = this.auth.getAuthenticatedUserId();
        let getShopItemsObservable = this.shop.getShopItems()

        if (userId !== undefined) {
            getShopItemsObservable = this.shop.getShopItems(userId)
        }

        getShopItemsObservable.subscribe(
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
    }

    refreshCartCountFor(cartItem: ICartItem) {
        this.shopItems
            .filter(shopItem => shopItem._id === cartItem.itemId)
            .shift()
            .cartCount = cartItem.quantity
    }

    addToCart(item: IShopItem): void {
        if ([0, 'undefined'].indexOf(item.cartCount) > -1) {
            this.cart.addCartItem(item)
                .subscribe(cartItem => this.refreshCartCountFor(cartItem));
        } else {
            this.cart.getCartItem(this.auth.getAuthenticatedUserId(), item._id)
                .switchMap(cartItem => this.cart.increaseCartItemQunatity(cartItem))
                .subscribe(cartItem => this.refreshCartCountFor(cartItem));
        }
    }
}
