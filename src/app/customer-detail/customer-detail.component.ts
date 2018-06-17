import {Component, OnInit} from '@angular/core';
import {ICustomer} from "../customers/customer";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  pageTitle = 'Customer Detail';
  customer: ICustomer;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.customer = {
      "customerId": 2,
      "customerName": "Garden Cart",
      "customerCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }
  }

  onBack(): void {
    this._router.navigate(['/customers']);
  }

}
