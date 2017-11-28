/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async, fakeAsync, inject} from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { CalendarModule, RatingModule } from 'primeng/primeng';

import { ItemCartComponent } from './cart-item-list.component';
import { CartService } from '../shared/cart.service';
import { AuthService } from '../shared/auth.service';

describe('ItemCartComponent', () => {
    let component: ItemCartComponent;
    let fixture: ComponentFixture<ItemCartComponent>;
    let cartService;

    let cartItemDetailedData = [{
        '_id': '10ef43hdg342kdn4',
        'itemId': '1765',
        'userId': 'john.doe',
        'name': 'Walter Rake',
        'code': 'GDN-0011',
        'unitPrice': 15.00,
        'quantity': 2,
    }];

    let cartItemQty1 = {
        '_id': '10928hdg3hd',
        'userId': 'john.doe',
        'itemId': '1765',
        'quantity': 1,
        'unitPrice': 15.00,
    }

    let cartItemQty2 = {
        '_id': '64837hdg3fq',
        'userId': 'john.doe',
        'itemId': '1765',
        'quantity': 2,
        'unitPrice': 15.00,
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
                CalendarModule,
                RatingModule
            ],
            declarations: [ItemCartComponent],
            providers: [
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

        fixture = TestBed.createComponent(ItemCartComponent);
        component = fixture.componentInstance;
        cartService = fixture.debugElement.injector.get(CartService);
    });

    it('should create the CartItemList component', async(() => {
        fixture = TestBed.createComponent(ItemCartComponent);
        let app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    }));

    // it('should confirm cart item list', fakeAsync(() => {
    //     spyOn(cartService, 'getCartItemsWithDetails')
    //         .and.returnValue(Observable.of(cartItemDetailedData));
    //     fixture.detectChanges();

    //     expect(fixture.debugElement.nativeElement.textContent).toContain(
    //         'Walter Rake');
    // }));

    it('should confirm incrementing cart item quantity', fakeAsync(() => {
        spyOn(cartService, 'increaseCartItemQunatity')
            .and.returnValue(Observable.of(cartItemQty2));
        component.increaseQuantity(cartItemQty1)
        fixture.detectChanges();

        expect(cartService.increaseCartItemQunatity).toHaveBeenCalledWith(
            cartItemQty1);
    }));

    it('should confirm decrementing cart item', fakeAsync(() => {
        spyOn(cartService, 'decreaseCartItemQunatity')
            .and.returnValue(Observable.of(cartItemQty1));
        component.decreaseQunatity(cartItemQty2)
        fixture.detectChanges();

        expect(cartService.decreaseCartItemQunatity).toHaveBeenCalledWith(
            cartItemQty2);
    }));

    it('should confirm deleting cart item', fakeAsync(() => {
        spyOn(cartService, 'removeCartItem')
            .and.returnValue(Observable.of(cartItemQty1));
        component.removeCartItem(cartItemQty1)
        fixture.detectChanges();

        expect(cartService.removeCartItem).toHaveBeenCalledWith(
            cartItemQty1);
    }));
});
