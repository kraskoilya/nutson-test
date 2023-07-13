import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { FeedPagination } from '../models/feed-dto';
import { feedAction, feedFailure, feedSuccess } from './actions/feed.action';

export interface FeedState {
  feed: FeedPagination | null;
  error: HttpErrorResponse | null;
  isLoading: boolean;
}

export const initialState: FeedState = {
  feed: null,
  error: null,
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(feedAction, (state) => ({
    ...state,
    feed: null,
    error: null,
    isLoading: true,
  })),
  on(feedSuccess, (state, { feed }) => ({
    ...state,
    feed,
    error: null,
    isLoading: false,
  })),

  on(feedFailure, (state, { error }) => ({
    ...state,
    feed: null,
    error,
    isLoading: false,
  }))
);
