import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'app/core/core.module';
import { MaterialModule } from 'app/material.module';
import { AuthService } from 'core';

import { AppComponent } from './app.component';

describe('App Component', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [
                NoopAnimationsModule,
                HttpClientModule,
                RouterTestingModule,
                MaterialModule,
                CoreModule
            ],
            providers: [AuthService]
        });

        fixture = TestBed.createComponent(AppComponent);
    });

    it('should create the app component', async(() => {
        let app = fixture.debugElement.componentInstance;

        expect(app).toBeTruthy();
    }));

    it(`should have as title 'Cartify'`, async(() => {
        let app = fixture.debugElement.componentInstance;
        let title = app.titleService.getTitle();

        expect(title).toEqual('Cartify');
    }));
});
