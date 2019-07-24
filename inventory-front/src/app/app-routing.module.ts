import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path:"add-customer", component: AddCustomerComponent},
  { path:"view-customer", component: ViewCustomerComponent},
  { path:"sample", component: SampleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
