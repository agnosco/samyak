import {Component, OnInit} from '@angular/core';
import {CustomerService} from './customer.service';

@Component({
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
  pageTitle = 'Customer List';
  imageWidth = 50;
  imageMargin = 5;
  showImage = false;
  _customerFilter;
  filteredCustomers;
  customers;
  errorMessage;

  get customerFilter() {
    return this._customerFilter;
  }

  set customerFilter(filterByValue) {
    this._customerFilter = filterByValue;
    this.filteredCustomers = this.customerFilter ? this.filterCustomersByFilterText(this.customerFilter) : this.customers;
  }

  constructor(private _customerService: CustomerService) {
  }

  onRatingClicked(message): void {
    this.pageTitle = message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  filterCustomersByFilterText(filterByText) {
    filterByText = filterByText.toLocaleLowerCase();
    return this.customers.filter(customer => customer.customerName.toLocaleLowerCase().indexOf(filterByText) !== -1);

  }

  ngOnInit(): void {
    this.customers = this._customerService.getCustomers()
      .subscribe(customers => {
          this.customers = customers;
          this.filteredCustomers = this.customers;
        },
        error => this.errorMessage = <any> error);
    this.customerFilter = '';
  }

}
