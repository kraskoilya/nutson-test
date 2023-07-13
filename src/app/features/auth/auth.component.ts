import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@nutson-test/core/store/app.state';
import { environment } from '@nutson-test/environment';
import { Observable } from 'rxjs';
import { loginAction } from './store/actions/login.action';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [
    `
      .overlay {
        position: relative;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  public readonly isLoading$: Observable<boolean> = this._store.select(
    (state: AppState) => state.auth.isLoading
  );

  constructor(private readonly _store: Store<AppState>) {}

  public login(): void {
    // this payload can be better on the other places: env, service and etc.
    const loginPayload = {
      installation_token: environment.installationToken,
      device: {
        platform: 'Web',
        platform_version: 'Web-1.0.0',
      },
      application: {
        app_name: 'Test WEB App',
        app_version: '1.0',
        app_build: 'development',
        app_type: 'watch_to_earn',
      },
    };

    this._store.dispatch(loginAction({ loginPayload }));
  }
}
