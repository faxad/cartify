import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService, ShopService } from 'core';
import { IShopItem } from 'shared';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './shop-item-detail.component.html',
    providers: [ShopService]
})
export class ShopItemDetailComponent implements OnInit {
    private shopItem$: Observable<IShopItem>;
    private reviewText = '';
    private starRating = 0;

    constructor(
        private auth: AuthService,
        private route: ActivatedRoute,
        private router: Router,
        private shop: ShopService) {}

    ngOnInit(): void {
        this.shopItem$ = this.shop.getShopItem(
            this.route.snapshot.paramMap.get('id')
        );
    }

    goBack(): void {
        this.router.navigate(['/items']);
    }

    onSubmit(shopItemId: string, remarks: string): void {
        this.shop.setShopItemReview(shopItemId, remarks, this.starRating)
            .subscribe(shopItemReview => {
                this.reviewText = '';
                this.starRating = 0;
                this.ngOnInit();
                console.log('Review added');
            }
        );
    }
}
