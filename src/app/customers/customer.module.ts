import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {CustomerDetailComponent} from '../customer-detail/customer-detail.component';
import {CustomerGuardService} from '../customer-detail/customer-guard.service';
import {CustomerListComponent} from './customer-list.component';
import {ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';
import {CustomerService} from './customer.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'customers', component: CustomerListComponent},
      {
        path: 'customers/:id',
        canActivate: [CustomerGuardService],
        component: CustomerDetailComponent
      }
    ]),
    SharedModule
  ],
  providers: [
    CustomerGuardService,
    CustomerService
  ],
  declarations: [
    ConvertToSpacesPipe,
    CustomerListComponent,
    CustomerDetailComponent
  ]
})
export class CustomerModule {
}
