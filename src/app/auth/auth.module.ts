import { NgModule } from '@angular/core';
import { SharedModule } from 'shared';

import { LoginComponent } from './auth-component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [
        SharedModule,
        AuthRoutingModule,
    ],
    declarations: [
        LoginComponent
    ]
})
export class AuthModule { }
