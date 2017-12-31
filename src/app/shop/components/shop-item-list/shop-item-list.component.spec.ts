import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { MatDialog } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'app/core/core.module';
import { ShopModule } from 'app/shop/shop.module';
import { ShopService } from 'core';

import { ShopItemListComponent } from './shop-item-list.component';

describe('ShopItemListComponent', () => {
    let component: ShopItemListComponent;
    let fixture: ComponentFixture<ShopItemListComponent>;
    let shopItemData = [{
        '_id': '5a2ef031e00a432a5c18d94e',
        'name': 'Walter Rake',
        'code': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Lorem ipsum dolor....',
        'unitPrice': 19.95,
        'quantityInStock': 13,
        'rating': 3.2,
        'imageUrl': 'http://placehold.it/320x150'
    }];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                RouterTestingModule,
                ShopModule,
                CoreModule
            ],
            declarations: [],
            providers: [
                MatDialog,
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

        fixture = TestBed.createComponent(ShopItemListComponent);
        component = fixture.componentInstance;
    });

    it('should create the ShopItemList component', async(() => {
        fixture = TestBed.createComponent(ShopItemListComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should create a shop service', inject([ShopService], (shopService: ShopService) => {
        expect(shopService).toBeTruthy();
    }));

    it('should confirm shop items', inject(
        [ShopService, MockBackend], (shopService: ShopService, backendMock: MockBackend) => {
            let response = new ResponseOptions({
                body: JSON.stringify(shopItemData)
            });

            backendMock.connections.subscribe(
                (c: MockConnection) => c.mockRespond(new Response(response))
            );

            shopService.getShopItems().subscribe( data => {

                expect(data).toEqual(shopItemData);

                fixture.detectChanges();
                let compiled = fixture.debugElement.nativeElement;

                expect(compiled.querySelector(
                    '#shopItem1765Title').textContent).toContain('Walter');
            });
        }
    ));
});
