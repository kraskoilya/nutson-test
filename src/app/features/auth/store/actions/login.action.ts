import { createAction, props } from '@ngrx/store';
import { LoginPayLoad } from '../../models/login-payload';
import { ActionType } from '../action-types';

export const loginAction = createAction(
  ActionType.LOGIN,
  props<{ loginPayload: LoginPayLoad }>()
);

export const loginSuccess = createAction(
  ActionType.LOGIN_SUCCESS,
  props<{ access_token: string; refresh_token: string; user_id: number }>()
);

export const loginFailure = createAction(
  ActionType.LOGIN_FAILURE,
  props<{ error: any }>()
);

export const refreshLogin = createAction(ActionType.LOGIN_REFRESH);

export const loginStart = createAction(ActionType.LOGIN_START);

export const loginEnd = createAction(ActionType.LOGIN_END);
