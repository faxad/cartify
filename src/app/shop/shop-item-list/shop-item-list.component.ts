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

@Component({
    selector: 'list-item',
    templateUrl: './shop-item-list.component.html',
    styleUrls: ['./shop-item-list.component.css']
})
export class ShopItemListComponent implements OnInit {
    private modalIdentifier = 'shopItemModal';
    private filterBy: string;
    private customerId: string;
    private customerCartItems = {};
    private cartItemReviews = {};
    private shopItemRatings = {};
    private shopItems: IShopItem[];
    private showLoading = true;
    private ccCount = 0;

    constructor(
        private shop: ShopService,
        private auth: AuthService,
        private cart: CartService,
        private route: ActivatedRoute,
        private appRef: ApplicationRef
    ) {}

    getShopItems(event: any): void {
        this.shop.getShopItems().subscribe(
            shopItems => {
                this.shopItems = shopItems;
                for (let shopItem of shopItems) {
                    this.shop.getShopItemReviewsCount(shopItem.id).subscribe(
                        reviews => this.cartItemReviews[shopItem.id] = reviews,
                    );
                }
            },
            (error: BaseError) => {
                if (error instanceof NotFoundError) {
                    console.log("NOT FOUND");
                } else
                    throw error;
            });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.customerCartItems = {}; // re-initialize collection
            this.customerId = AuthService.getUser();
            this.cart.getCartItems().subscribe(
                cartItems => {
                    for (let cartItem of cartItems) {
                        this.customerCartItems[cartItem.itemId] = cartItem.quantity;
                    }
                    this.getShopItems(null);
                    this.appRef.tick();
                },
                error => console.log(error),
                () => this.showLoading = false
            );

            this.shop.getShopItemsRating().subscribe(
                ratings => {
                    this.shopItemRatings = ratings;
                }
            );
        });
    }

    addToCart(item: any): void {
        this.cart.addOrUpdateCartItem(item, function(service, item) {
            service.addCartItem(item).subscribe(
                items => console.log('Added to Cart'));
        }).subscribe(
            () => {
                this.customerCartItems[item.id] = this.customerCartItems[item.id] + 1;
            }
        );
    }
}
