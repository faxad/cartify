import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../core/services/cart.service';
import { ICartItem } from '../shared';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'


@Component({
    templateUrl: './cart-item-list.component.html'
})
export class ItemCartComponent implements OnInit {
    private userCartItems$: Observable<ICartItem[]>;

    constructor(private router: Router, private cart: CartService) {}

    ngOnInit(): void {
        this.userCartItems$ = this.cart.getCartItems();
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
