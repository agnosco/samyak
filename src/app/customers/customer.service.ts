import {Injectable} from '@angular/core';
import {ICustomer} from './customer';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomerService {

  private _customersUrl = './api/customers.json';
  // api_url = 'http://localhost:3000';
  // private _customersUrl = `${this.api_url}/api/customers`;

  constructor(private _http: HttpClient) {
  }

  getCustomers(): Observable<ICustomer[]> {
    return this._http.get<ICustomer[]>(this._customersUrl)
    .do(data => console.log('All: ', JSON.stringify(data)))
      .catch(this.handleError);
  }

  // getCustomers(): Observable<ICustomer[]> {
  //   return this._http.get(this._customersUrl)
  //     .do(data => console.log('All: ', JSON.stringify(data)))
  //     .catch(this.handleError);
  // }

  // addCustomers(item): Observable<ICustomer[]> {
  //   return this._http.post('/api/addCustomer', {
  //     customer: item
  //   });
  // }
  private handleError(err: HttpErrorResponse) {
    console.log('here is ther error', err.message);
    return Observable.throw(err.message);
  }
}
