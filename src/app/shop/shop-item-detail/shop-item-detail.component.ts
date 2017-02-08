import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IShopItem } from '../../shared/shop-item.interface';
import { IShopItemReview } from '../../shared/shop-item-review.interface';
import { ShopService } from '../../shared/shop.service';

@Component({
	templateUrl: 'app/shop/shop-item-detail/shop-item-detail.component.html',
	providers: [ShopService]
})
export class ShopItemDetailComponent implements OnInit {
	private shopItem: IShopItem;
	private shopItemReviews: IShopItemReview[];
	private reviewsCount: number;

	constructor(
		private route: ActivatedRoute,
    private router: Router,
		private shop: ShopService) {}

	ngOnInit(): void {
		this.route.params.subscribe(param => {
			this.shop.getShopItem(
				Number(+param['id'])).subscribe(
					shopItem => this.shopItem = shopItem,
					error => console.log(error)
				);
			this.shop.getShopItemReviews(
				Number(+param['id'])).subscribe(
					shopItemReviews => this.shopItemReviews = shopItemReviews,
					error => console.log(error)
				);
			this.shop.getShopItemReviewsCount(
				Number(+param['id'])).subscribe(
					reviewsCount => this.reviewsCount = reviewsCount,
					error => console.log(error)
			)
		})
	}

	goBack(): void {
		this.router.navigate(['/items']);
	}

	onSubmit(remarks: string): void {
		this.route.params.subscribe(param => {
			this.shop.setShopItemReview(
				Number(+param['id']), remarks).subscribe(
					shopItemReview => console.log("Review added"),
					error => console.log(error)
				);
		})
	}
}
