import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FeedService } from '../../services/feed.service';
import {
  feedAction,
  feedEnd,
  feedFailure,
  feedStart,
  feedSuccess,
} from '../actions/feed.action';

@Injectable()
export class FeedEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _store: Store,
    private readonly _feedService: FeedService
  ) {}

  feedActions$ = createEffect(() =>
    this._actions$.pipe(
      ofType(feedAction),
      switchMap(() => {
        this._store.dispatch(feedStart());
        return this._feedService.get().pipe(
          map((data) => {
            this._store.dispatch(feedEnd());
            return feedSuccess({
              feed: data.data,
            });
          }),
          catchError((error: HttpErrorResponse) => {
            this._store.dispatch(feedEnd());
            return of(feedFailure({ error }));
          })
        );
      })
    )
  );
}
