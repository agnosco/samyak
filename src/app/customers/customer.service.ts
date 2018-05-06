import {Injectable} from '@angular/core';
import {ICustomer} from './customer';

@Injectable()
export class CustomerService {
  getCustomers(): ICustomer[] {
    return [
      {
        'customerId': 2,
        'customerName': 'Garden Cart',
        'customerCode': 'GDN-0023',
        'releaseDate': 'March 18, 2016',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 2,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
      },
      {
        'customerId': 5,
        'customerName': 'Hammer',
        'customerCode': 'TBX-0048',
        'releaseDate': 'May 21, 2016',
        'description': 'Curved claw steel hammer',
        'price': 8.9,
        'starRating': 3,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
      }
    ];
  }
}
