import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'app/core/core.module';
import { MaterialModule } from 'app/material.module';
import { ShopModule } from 'app/shop/shop.module';
import { ShopService } from 'core';
import { Observable } from 'rxjs/Observable';

import { ValidationService } from './form-validation.service';
import { FormComponent } from './shop-item-form.component';

describe('Form Component', () => {
    let component: FormComponent;
    let fixture: ComponentFixture<FormComponent>;
    let shopService: ShopService;

    let shopItemData = {
        '_id': '5a2ef031e00a432a5c18d94e',
        'name': 'Walter Rake',
        'code': 'GDN-0011',
        'releaseDate': new Date(),
        'category': 'bar',
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
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: {} }
            ]
        })

        fixture = TestBed.createComponent(FormComponent);
        component = fixture.componentInstance;
        component.data = shopItemData
        component.ngOnInit();

        shopService = fixture.debugElement.injector.get(ShopService);
    });

    it('should be able to instantiate itself', async(() => {
        let app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    }));

    it('should get an injected instance of form validation service', inject(
        [ValidationService], (validationService: ValidationService) => {
            expect(validationService).toBeTruthy();
        }
    ));

    it('should contain all the form fields e.g. name, code etc..', () => {
        expect(component.shopItemForm.contains('name')).toBeTruthy();
    });

    it('should invalidate the form control if value is empty', () => {
        let nameControl = component.shopItemForm.get('name');
        nameControl.setValue('');

        expect(nameControl.valid).toBeFalsy();
    });

    it('should confirm service call to update using the revised value', fakeAsync(() => {
        spyOn(shopService, 'updateShopItem')
            .and.returnValue(Observable.of(shopItemData));

        // arrange
        let shopItemForm = component.shopItemForm
        let revisedName = 'Walter Rake (updated)'

        shopItemForm.controls['name'].setValue(revisedName);
        shopItemForm.value['name'] = revisedName;

        // act
        component.submitItem(shopItemForm);

        // assert
        expect(shopService.updateShopItem)
            .toHaveBeenCalledWith(shopItemForm.value);
    }));

    it('should disable service call to update if form is empty', fakeAsync(() => {
        spyOn(shopService, 'updateShopItem')
            .and.returnValue(Observable.of(shopItemData));

        component.data = [];
        component.ngOnInit();

        component.submitItem(component.shopItemForm);

        expect(shopService.updateShopItem).not.toHaveBeenCalled();
    }));
});
