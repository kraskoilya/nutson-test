import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { appRoutes } from '../constants/appRoutes';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(
    private readonly _cookieService: CookieService,
    private readonly _router: Router
  ) {}

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const accessToken = this._cookieService.get('token');

    if (!!accessToken) {
      this._router.navigateByUrl(appRoutes.FEED);
      return false;
    }

    return true;
  }
}
