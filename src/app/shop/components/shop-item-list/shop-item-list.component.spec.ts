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

describe('Shop Item List Component', () => {
    let component: ShopItemListComponent;
    let fixture: ComponentFixture<ShopItemListComponent>;
    let shopItemData = [{
        '_id': '5a2ef031e00a432a5c18d94e',
        'name': 'Walter Rake',
        'code': 'GDN-0011',
        'category': 'Foo',
        'releaseDate': new Date(),
        'description': 'Lorem ipsum dolor....',
        'unitPrice': 19.95,
        'quantityInStock': 13,
        'rating': 3.2,
        'imageUrl': 'http://placehold.it/320x150',
        'cartCount': 0
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
        })

        fixture = TestBed.createComponent(ShopItemListComponent);
        component = fixture.componentInstance;
    });

    it('should be able to instantiate itself', async(() => {
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should get an injected instance of shop service', inject(
        [ShopService], (shopService: ShopService) => {
            expect(shopService).toBeTruthy();
        }
    ));

    it('should confirm shop items', inject(
        [ShopService, MockBackend], (shopService: ShopService, backendMock: MockBackend) => {
            backendMock.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ body: shopItemData })
                    ));
                }
            );

            shopService.getShopItems().subscribe(data => {
                expect(data).toEqual(shopItemData);
            });
        }
    ));
});
