import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError } from 'rxjs';
import { AppRoute } from '../constants/appRoutes';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly _cookieService: CookieService,
    private readonly _router: Router
  ) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this._cookieService.get('token');

    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    return next
      .handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => this.catchTokenError(error))
      );
  }

  private catchTokenError(error: HttpErrorResponse): Observable<any> {
    if (error && error.status === 401) {
      // some logic with refresh token, but it wasn't on the task.

      // remove login
      this._cookieService.delete('token');
      this._router.navigate([AppRoute.LOGIN]);
    }
    throw error;
  }
}
