import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService, CartService, ShopService } from 'core';
import { IShopItem, ICartItem } from 'shared';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './shop-item-list.component.html',
    styleUrls: ['./shop-item-list.component.css']
})
export class ShopItemListComponent implements OnInit {
    private shopItems$: Observable<IShopItem[]>;

    constructor(
        private shop: ShopService,
        private auth: AuthService,
        private cart: CartService,
        private route: ActivatedRoute
    ) {}

    getShopItems(event: any): void {
        const userId = this.auth.getAuthenticatedUserId();
        this.shopItems$ = (userId !== undefined) ?
            this.shop.getShopItems(userId) : this.shop.getShopItems()
    }

    ngOnInit(): void {
        this.getShopItems(null);
    }

    addToCart(item: IShopItem): void {
        let cartItem$: Observable<ICartItem> = undefined;

        if ([0, 'undefined', undefined].indexOf(item.cartCount) > -1) {
            cartItem$ = this.cart.addCartItem(item)
        } else {
            cartItem$ = this.cart.getCartItem(this.auth.getAuthenticatedUserId(), item._id)
                .switchMap(cartItem => this.cart.increaseCartItemQunatity(cartItem))
        }

        cartItem$.subscribe(cartItem => this.shop.refreshCartCountFor(cartItem));
            // .first() ensure first observable completes
            // .publishLast() publish only when the last observable is completed
            // .refCount() keep it in memeory
    }
}
