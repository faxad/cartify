/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async, fakeAsync, inject} from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { CalendarModule, RatingModule } from 'primeng/primeng';

import {
    ValidationService,
    ShopService
} from '../../shared/index';

import { FormComponent } from './shop-item-form.component';
import { CartService } from '../../shared/cart.service';
import { AuthService } from '../../shared/auth.service';

describe('FormComponent', () => {
    let component: FormComponent;
    let fixture: ComponentFixture<FormComponent>;
    let shopService;

    let shopItemData = {
        'id': 1765,
        'name': 'abc Walter Rake',
        'code': 'GDN-0011',
        'releaseDate': '2017-03-07T21:00:00.000Z',
        'description': 'Lorem ipsum dolor....',
        'unitPrice': 19.95,
        'quantityInStock': 13,
        'rating': 3,
        'imageUrl': 'http://placehold.it/320x150'
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule, CalendarModule, RatingModule ],
            declarations: [
            FormComponent,
            ],
            providers: [
                ShopService,
                ValidationService,
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

        fixture = TestBed.createComponent(FormComponent);
        component = fixture.componentInstance;
        shopService = fixture.debugElement.injector.get(ShopService);
    });

    it('should create the FormComponent component', async(() => {
        let fixture = TestBed.createComponent(FormComponent);
        let app = fixture.debugElement.componentInstance;
        component.shopItem = shopItemData;
        component.ngOnInit();

        expect(app).toBeTruthy();
    }));

    it('should create form validation service', inject(
        [ValidationService], (validationService: ValidationService) => {
            expect(validationService).toBeTruthy();
    }));

    it('should confirm update shop item', fakeAsync(() => {
        spyOn(shopService, 'updateShopItem')
            .and.returnValue(Observable.of(shopItemData));
        
        component.shopItem = shopItemData;
        component.ngOnInit();
        fixture.detectChanges();

        var shopItemForm = component.shopItemForm
        var controls = shopItemForm.controls;

        controls['id'].setValue(1765)
        controls['name'].setValue('abc Walter Rake')
        controls['code'].setValue('GDN-0011')
        controls['releaseDate'].setValue(new Date('2017-03-07T21:00:00.000Z'))
        controls['description'].setValue('Lorem ipsum dolor....')
        controls['unitPrice'].setValue(19.95)
        controls['quantityInStock'].setValue(13)

        component.submitItem(shopItemForm)
        fixture.detectChanges();

        controls['name'].setValue('Walter Rake')

        component.submitItem(shopItemForm)
        fixture.detectChanges();

        expect(shopService.updateShopItem).not.toHaveBeenCalledWith(
            shopItemForm.value);
    }));
});
