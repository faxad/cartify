import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: 'items', loadChildren: 'app/shop/shop.module#ShopModule' },
    { path: 'login', loadChildren: 'app/auth/auth.module#AuthModule' },
    { path: 'cart', loadChildren: 'app/cart/cart.module#CartModule', canActivate: [AuthGuard] },
    { path: '', redirectTo: '/items', pathMatch: 'full' },
    { path: '**', redirectTo: '/items', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
