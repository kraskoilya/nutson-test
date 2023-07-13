import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { refreshLogin } from './features/auth/store/actions/login.action';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private readonly _store: Store) {}

  public ngOnInit(): void {
    this._store.dispatch(refreshLogin());
  }
}
