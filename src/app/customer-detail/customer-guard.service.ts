import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";

@Injectable()
export class CustomerGuardService implements CanActivate {

  constructor(private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;

    if (isNaN(id) || id < 1) {
      alert('invalid customer id');
      this._router.navigate(['/customers']);
      return false;
    }

    return true;
  }

}
