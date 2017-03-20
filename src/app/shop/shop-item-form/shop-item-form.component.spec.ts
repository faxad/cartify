/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async, fakeAsync, inject} from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    let cartData = [{}];
    let shopData = {
        'id': 1765,
        'name': 'Walter Rake',
        'code': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Lorem ipsum dolor....',
        'unitPrice': 19.95,
        'quantityInStock': 13,
        'rating': 3.2,
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
    });

    it('should create the FormComponent component', async(() => {
        let fixture = TestBed.createComponent(FormComponent);
        component.shopItem = shopData;
        component.ngOnInit();
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should create form validation service', inject([ValidationService], (validationService: ValidationService) => {
        expect(validationService).toBeTruthy();
    }));
});
