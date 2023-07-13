import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { appRoutes } from '@nutson-test/core/constants/appRoutes';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import {
  loginAction,
  loginEnd,
  loginFailure,
  loginStart,
  loginSuccess,
} from '../actions/login.action';

@Injectable()
export class LoginEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _authService: AuthService,
    private readonly _store: Store,
    private readonly _router: Router,
    private readonly _cookieService: CookieService
  ) {}

  login$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loginAction),
      switchMap((action) => {
        this._store.dispatch(loginStart());
        return this._authService.login(action.loginPayload).pipe(
          map((data) => {
            this._store.dispatch(loginEnd());
            this._cookieService.set('token', data.data.access_token);
            this._cookieService.set('refresh_token', data.data.refresh_token);
            this._cookieService.set('user_id', String(data.data.user_id));

            return loginSuccess({
              access_token: data.data.access_token,
              refresh_token: data.data.refresh_token,
              user_id: data.data.user_id,
            });
          }),
          catchError((error: HttpErrorResponse) => {
            this._store.dispatch(loginEnd());
            return of(loginFailure({ error }));
          })
        );
      })
    )
  );

  redirectAfterSubmit = createEffect(
    () =>
      this._actions$.pipe(
        ofType(loginSuccess),
        tap(() => {
          this._router.navigateByUrl(appRoutes.FEED);
        })
      ),
    { dispatch: false }
  );
}
