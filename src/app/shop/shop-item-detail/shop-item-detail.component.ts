import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService, ShopService } from '../../shared/index';
import { IShopItem } from '../../shared/shop-item.interface';

@Component({
    templateUrl: './shop-item-detail.component.html',
    providers: [ShopService]
})
export class ShopItemDetailComponent implements OnInit {
    public shopItem: IShopItem;
    private reviewText = '';
    private starRating = 0;
    private shopItemId = null;

    constructor(
        private auth: AuthService,
        private route: ActivatedRoute,
        private router: Router,
        private shop: ShopService) {}
å
    ngOnInit(): void {
        this.shopItemId = this.route.snapshot.paramMap.get('id')
        this.shop.getShopItem(this.shopItemId)
            .subscribe(shopItem => this.shopItem = shopItem);
    }

    goBack(): void {
        this.router.navigate(['/items']);
    }

    onSubmit(remarks: string): void {
        this.shop.setShopItemReview(this.shopItemId, remarks, this.starRating)
            .subscribe(shopItemReview => {
                this.reviewText = '';
                this.starRating = 0;
                this.ngOnInit();
                console.log('Review added');
            }
        );
    }
}
