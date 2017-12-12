import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../core/services/cart.service';
import { ShopService } from '../core/services/shop.service'
import { ICartItem } from '../shared';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'


@Component({
    templateUrl: './cart-item-list.component.html',
    providers: [CartService, ShopService]
})
export class ItemCartComponent implements OnInit {
    private userCartItems$: Observable<ICartItem[]>;
    private showLoading = true;

    constructor(private router: Router, private cart: CartService) {}

    ngOnInit(): void {
        this.userCartItems$ = this.cart.getCartItems().pipe(
            tap(() => this.showLoading = false)
        )
    }

    increaseQuantity(item: ICartItem): void {
        this.cart.increaseCartItemQunatity(item).subscribe(
            items => console.log('Incremented'));
    }

    decreaseQunatity(item: ICartItem): void {
        this.cart.decreaseCartItemQunatity(item).subscribe(
            items => console.log('Decremented'));
    }

    removeCartItem(item: ICartItem): void {
        this.cart.removeCartItem(item).subscribe(
            items => console.log('Removed'));
    }

    goBack(): void {
        this.router.navigate(['/items']);
    }
}
