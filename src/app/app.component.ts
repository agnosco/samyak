
import {Component} from '@angular/core';
import {CustomerService} from './customers/customer.service';
@Component({
  selector: 'app-root',
  template: '<div><h1>{{pageTitle}}</h1><app-customer></app-customer></div>',
  providers: [CustomerService]
})

export class AppComponent {
  pageTitle = 'Samyak Botique';
}
