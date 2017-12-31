import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'app/core/core.module';
import { MaterialModule } from 'app/material.module';
import { ShopModule } from 'app/shop/shop.module';
import { ShopService } from 'core';
import { Observable } from 'rxjs/Observable';

import { ValidationService } from './form-validation.service';
import { FormComponent } from './shop-item-form.component';

describe('FormComponent', () => {
    let component: FormComponent;
    let fixture: ComponentFixture<FormComponent>;
    let shopService;
    let dialog: MatDialog;

    let shopItemData = {
        '_id': '5a2ef031e00a432a5c18d94e',
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
            imports: [
                RouterTestingModule,
                HttpClientModule,
                MaterialModule,
                MatDialogModule,
                ShopModule,
                CoreModule
            ],
            declarations: [],
            providers: [
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
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: {} }
            ]
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                 entryComponents: [FormComponent],
            },
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(FormComponent);
                component = fixture.componentInstance;
        });

        fixture = TestBed.createComponent(FormComponent);
        component = fixture.componentInstance;
        shopService = fixture.debugElement.injector.get(ShopService);
    });

    it('should create the FormComponent component', async(() => {
        fixture = TestBed.createComponent(FormComponent);
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

        component.data = shopItemData
        component.ngOnInit();

        let shopItemForm = component.shopItemForm
        let controls = shopItemForm.controls;
        controls['name'].setValue('abc Walter Rake (updated)')

        component.submitItem(shopItemForm)

        expect(shopService.updateShopItem).toHaveBeenCalledWith(
            shopItemForm.value);
    }));
});
