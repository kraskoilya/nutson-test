import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loginFailure,
  loginSuccess,
  refreshLogin,
} from '@nutson-test/features/auth/store/actions/login.action';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  refreshLoginOnInit$ = createEffect(() =>
    this._actions$.pipe(
      ofType(refreshLogin),
      map(() => {
        const accessToken = this._cookieService.get('token');
        const refreshToken = this._cookieService.get('refresh_token');
        const userId = this._cookieService.get('user_id');

        if (accessToken && refreshToken) {
          return loginSuccess({
            access_token: accessToken,
            refresh_token: refreshToken,
            user_id: +userId,
          });
        } else {
          return loginFailure({ error: 'No saved login data' });
        }
      })
    )
  );

  constructor(
    private readonly _actions$: Actions,
    private readonly _cookieService: CookieService
  ) {}
}
