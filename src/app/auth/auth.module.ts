import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module'
import { LoginComponent } from './auth-component';
import { SharedModule } from 'shared';

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
