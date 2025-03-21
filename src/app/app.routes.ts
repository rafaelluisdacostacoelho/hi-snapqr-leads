import { Routes } from '@angular/router';
import { CheckoutSuccessComponent } from './components/checkout-success/checkout-success.component';
import { CheckoutCancelComponent } from './components/checkout-cancel/checkout-cancel.component';
import { PrincipalComponent } from './components/principal/principal.component';

export const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'checkout-success', component: CheckoutSuccessComponent },
    { path: 'checkout-cancel', component: CheckoutCancelComponent },
    { path: '**', redirectTo: '/' }
];
