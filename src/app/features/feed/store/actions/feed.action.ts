import { createAction, props } from '@ngrx/store';
import { FeedPagination } from '../../models/feed-dto';
import { ActionType } from '../action-types';

export const feedAction = createAction(ActionType.FEED);

export const feedSuccess = createAction(
  ActionType.FEED_SUCCESS,
  props<{ feed: FeedPagination }>()
);

export const feedFailure = createAction(
  ActionType.FEED_FAILURE,
  props<{ error: any }>()
);

export const feedStart = createAction(ActionType.FEED_START);

export const feedEnd = createAction(ActionType.FEED_END);
