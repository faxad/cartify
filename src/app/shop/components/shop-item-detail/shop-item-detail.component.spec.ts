import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'app/core/core.module';
import { ShopModule } from 'app/shop/shop.module';
import { ShopService } from 'core';
import { Observable } from 'rxjs/Observable';

import { ShopItemDetailComponent } from './shop-item-detail.component';

describe('ShopItemDetailComponent', () => {
    let component: ShopItemDetailComponent;
    let fixture: ComponentFixture<ShopItemDetailComponent>;
    let shopService;

    let shopItemData = {
        '_id': '5a2ef031e00a432a5c18d94e',
        'name': 'Walter Rake',
        'code': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Lorem ipsum dolor....',
        'unitPrice': 19.95,
        'quantityInStock': 13,
        'rating': 3.2,
        'imageUrl': 'http://placehold.it/320x150'
        };

    let shopItemReviews = [{
        '_id': '5a2ef031e00a432a5c18d94f',
        'itemId': '5a2ef031e00a432a5c18d94e',
        'userId': 'john.doe',
        'reviewDate': 'March 19, 2016',
        'remarks': 'this is my first review',
        'rating': 2
    }];

    let shopItemReviewsCount = 2;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                RouterTestingModule,
                HttpClientModule,
                ShopModule,
                CoreModule
            ],
            declarations: [],
            providers: [
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                        },
                    deps: [MockBackend, BaseRequestOptions],
                },
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ShopItemDetailComponent);
        component = fixture.componentInstance;
        shopService = fixture.debugElement.injector.get(ShopService);
    });

    it('should create the ShopItemDetail component', async(() => {
        let fixture = TestBed.createComponent(ShopItemDetailComponent);
        let app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    }));

    it('should confirm shop item detail', fakeAsync(() => {
        spyOn(shopService, 'getShopItem')
            .and.returnValue(Observable.of(shopItemData));
        fixture.detectChanges();

        expect(fixture.debugElement.nativeElement.querySelector(
            'p').textContent).toContain('Lorem ipsum');
    }));

    // it('should confirm shop item reviews', fakeAsync(() => {
    //     spyOn(shopService, 'getShopItemReviews')
    //         .and.returnValue(Observable.of(shopItemReviews));
    //     fixture.detectChanges();

    //     expect(fixture.debugElement.nativeElement.textContent).toContain(
    //         'this is my first review');
    // }));

    // it('should confirm shop item reviews count', fakeAsync(() => {
    //     spyOn(shopService, 'getShopItemReviewsCount')
    //         .and.returnValue(Observable.of(shopItemReviewsCount));
    //     component.shopItem = shopItemData;
    //     fixture.detectChanges();

    //     expect(fixture.debugElement.nativeElement.textContent).toContain('2 reviews');
    // }));

    it('should confirm setting shop item review', fakeAsync(() => {
        spyOn(shopService, 'setShopItemReview')
            .and.returnValue(Observable.of(shopItemReviews[0]));
        component.onSubmit('5a2ef031e00a432a5c18d94e', 'these are my remarks')

        expect(shopService.setShopItemReview).toHaveBeenCalledWith(
            '5a2ef031e00a432a5c18d94e', 'these are my remarks', 0);
    }));
});
