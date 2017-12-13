import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService, CartService, ShopService } from 'core';
import { ICartItem, IShopItem } from 'shared';

@Component({
    templateUrl: './shop-item-list.component.html',
    styleUrls: ['./shop-item-list.component.css']
})
export class ShopItemListComponent implements OnInit {
    private shopItems: IShopItem[];

    constructor(
        private shop: ShopService,
        private auth: AuthService,
        private cart: CartService,
        private route: ActivatedRoute
    ) {}

    getShopItems(event: any): void {
        const userId = this.auth.getAuthenticatedUserId();
        const getShopItems$ = (userId !== undefined) ?
            this.shop.getShopItems(userId) : this.shop.getShopItems()

        getShopItems$.subscribe(
            shopItems => {
                this.shopItems = shopItems;
            },
            () => {
                console.log('Error has occured')
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
