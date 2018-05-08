import { of as observableOf, empty as observableEmpty, Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CartModule } from 'app/cart/cart.module';
import { CoreModule } from 'app/core/core.module';
import { AuthService, CartService } from 'core';
import { CalendarModule, RatingModule } from 'primeng/primeng';
import { ItemCartComponent } from './cart-item-list.component';

describe('Cart Item Component', () => {
    let component: ItemCartComponent;
    let fixture: ComponentFixture<ItemCartComponent>;
    let cartService: CartService;

    let cartItemsData = [{
        '_id': '10ef43hdg342kdn4',
        'itemId': '1765',
        'userId': 'john.doe',
        'name': 'Walter Rake',
        'code': 'GDN-0011',
        'unitPrice': 15.00,
        'quantity': 2,
    }];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
                CalendarModule,
                RatingModule,
                CartModule,
                CoreModule
            ],
            declarations: [],
            providers: [
                CartService,
                AuthService
            ]
        })

        fixture = TestBed.createComponent(ItemCartComponent);
        component = fixture.componentInstance;
        cartService = fixture.debugElement.injector.get(CartService);
    });

    it('should be able to instantiate itself', async(() => {
        let app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    }));

    it('should confirm service call to increase quantity receives initial quantity', () => {
        spyOn(cartService, 'increaseCartItemQunatity')
            .and.returnValue(observableEmpty());

        component.increaseQuantity(cartItemsData[0])

        expect(cartService.increaseCartItemQunatity)
            .toHaveBeenCalledWith(cartItemsData[0]);
    });

    it('should confirm service call to decrease quantity receives initial quantity', () => {
        spyOn(cartService, 'decreaseCartItemQunatity')
            .and.returnValue(observableEmpty());

        component.decreaseQunatity(cartItemsData[0])

        expect(cartService.decreaseCartItemQunatity)
            .toHaveBeenCalledWith(cartItemsData[0]);
    });

    it('should confirm service call to receive the desired cart item for deletion', (() => {
        spyOn(cartService, 'removeCartItem')
            .and.returnValue(observableOf(cartItemsData[0]));

        component.removeCartItem(cartItemsData[0])

        expect(cartService.removeCartItem)
            .toHaveBeenCalledWith(cartItemsData[0]);
    }));
});
