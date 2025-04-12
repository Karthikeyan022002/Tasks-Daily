import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'supplies', component: SuppliesComponent },
  { path: 'product', component: ProductComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
