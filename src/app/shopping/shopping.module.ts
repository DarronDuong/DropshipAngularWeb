import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFilterComponent } from 'app/shopping/components/products/product-filter/product-filter.component';
import { ProductsComponent } from 'app/shopping/components/products/products.component';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrderComponent } from './components/my-order/my-order.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component : ProductsComponent},
      { path: 'shopping-cart', component : ShoppingCartComponent},
      { path: 'check-out', component : CheckOutComponent, canActivate: [AuthGuard]},
      { path: 'order-success/:id', component : OrderSuccessComponent, canActivate: [AuthGuard]},
      { path: 'my/orders', component : MyOrderComponent, canActivate: [AuthGuard]},
    ]),
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
})
export class ShoppingModule { }
