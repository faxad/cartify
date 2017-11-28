import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IShopItem } from '../../shared/shop-item.interface';

import {
    AuthService,
    ShopService,
} from '../../shared/index';

@Component({
    templateUrl: './shop-item-detail.component.html',
    providers: [ShopService]
})
export class ShopItemDetailComponent implements OnInit {
    public shopItem: IShopItem;
    private reviewText = '';
    private starRating = 0;

    constructor(
        private auth: AuthService,
        private route: ActivatedRoute,
        private router: Router,
        private shop: ShopService) {}

    ngOnInit(): void {
        this.route.params.subscribe(param => {
            this.shop.getShopItem(param['id']).subscribe(
                    shopItem => this.shopItem = shopItem
                );
        });
    }

    goBack(): void {
        this.router.navigate(['/items']);
    }

    onSubmit(remarks: string): void {
        this.route.params.subscribe(param => {
            this.shop.setShopItemReview(
                param['id'], remarks, this.starRating).subscribe(
                    shopItemReview => {
                        this.reviewText = '';
                        this.starRating = 0;
                        this.ngOnInit();
                        console.log('Review added');
                    }
                );
        });
    }
}
