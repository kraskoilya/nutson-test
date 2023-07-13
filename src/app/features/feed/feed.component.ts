import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@nutson-test/core/store/app.state';
import { Observable } from 'rxjs';
import { FeedPagination } from './models/feed-dto';
import { feedAction } from './store/actions/feed.action';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit {
  public readonly isLoading$: Observable<boolean> = this._store.select(
    (state: AppState) => state.feed.isLoading
  );
  public readonly feed$: Observable<FeedPagination | null> = this._store.select(
    (state: AppState) => state.feed.feed
  );

  constructor(private readonly _store: Store<AppState>) {}

  public ngOnInit(): void {
    this._store.dispatch(feedAction());
  }
}
