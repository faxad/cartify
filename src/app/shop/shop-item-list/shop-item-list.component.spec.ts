/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async, inject} from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShopItemListComponent } from './shop-item-list.component';
import { CartService } from '../../shared/cart.service'
import { ShopService } from '../../shared/shop.service'
import { AuthService } from '../../shared/auth.service'
import { FormComponent } from '../shop-item-form/shop-item-form.component';
import { ShopItemFilterPipe } from './shop-item-filter.pipe';

describe('ShopItemListComponent', () => {
  let component: ShopItemListComponent;
  let fixture: ComponentFixture<ShopItemListComponent>;
  let cartData = [{}]
  let shopData = [{
      "id": "1765",
      "name": "Walter Rake",
      "code": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Lorem ipsum dolor....",
      "unitPrice": 19.95,
      "quantityInStock": "13",
      "rating": 3.2,
      "imageUrl": "http://placehold.it/320x150"
  }]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule ],
      declarations: [
        ShopItemListComponent,
        ShopItemFilterPipe,
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

    fixture = TestBed.createComponent(ShopItemListComponent);
    component = fixture.componentInstance;
  });

  it('should create the ShopItemList component', async(() => {
    let fixture = TestBed.createComponent(ShopItemListComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should create a shop service', inject([ShopService], (shopService: ShopService) => {
      expect(shopService).toBeTruthy();
  }));

  it('should confirm shop items', inject(
    [ShopService, MockBackend], (shopService: ShopService, backendMock: MockBackend) => {
      let response = new ResponseOptions({
        body: JSON.stringify(shopData)
      });

      backendMock.connections.subscribe(
        (c: MockConnection) => c.mockRespond(new Response(response))
      );

      shopService.getShopItems().subscribe( data => {
        expect(data).toEqual(shopData);
        fixture.detectChanges();      
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('#shopItem1765Title').textContent).toContain('Walter')
      });

  }));

  // it('should confirm shop items (async)', async(() => {
  //   let shopService = fixture.debugElement.injector.get(ShopService);
  //   let spy = spyOn(shopService, 'getShopItems')
  //         .and.returnValue(Promise.resolve(shopData));
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     fixture.detectChanges();
  //     let compiled = fixture.debugElement.nativeElement;
  //     expect(compiled.querySelector('#item9Title').textContent).toContain('AabcLeaf')
  //   });
  // }));
});