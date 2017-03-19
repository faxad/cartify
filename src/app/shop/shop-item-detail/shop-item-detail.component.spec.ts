/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async, fakeAsync, inject} from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { CalendarModule, RatingModule } from 'primeng/primeng';

import { ShopItemDetailComponent } from './shop-item-detail.component';
import { CartService } from '../../shared/cart.service';
import { ShopService } from '../../shared/shop.service';
import { AuthService } from '../../shared/auth.service';
import { FormComponent } from '../shop-item-form/shop-item-form.component';

describe('ShopItemDetailComponent', () => {
    let component: ShopItemDetailComponent;
    let fixture: ComponentFixture<ShopItemDetailComponent>;
    let shopService;
    let shopData = {
        'id': '1765',
        'name': 'Walter Rake',
        'code': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Lorem ipsum dolor....',
        'unitPrice': 19.95,
        'quantityInStock': '13',
        'rating': 3.2,
        'imageUrl': 'http://placehold.it/320x150'
        };

    let shopItemReviews = [{
        'itemId': '1765',
        'userId': 'john.doe',
        'reviewDate': 'March 19, 2016',
        'remarks': 'this is my first review',
        'rating': 2
    }];

    let shopItemReviewsCount = 2;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule, CalendarModule, RatingModule ],
            declarations: [
            ShopItemDetailComponent,
            FormComponent
            ],
            providers: [
                ShopService,
                CartService,
                AuthService,
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
            .and.returnValue(Observable.of(shopData));
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h5').textContent).toContain('GDN-0011');
    }));

    it('should confirm shop item reviews', fakeAsync(() => {
        spyOn(shopService, 'getShopItemReviews')
            .and.returnValue(Observable.of(shopItemReviews));
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.textContent).toContain('this is my first review');
    }));

    it('should confirm shop item reviews count', fakeAsync(() => {
        spyOn(shopService, 'getShopItemReviewsCount')
            .and.returnValue(Observable.of(shopItemReviewsCount));
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        //expect(compiled.textContent).toContain('2 reviews');
    }));
    
});