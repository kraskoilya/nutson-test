import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import {
  loginAction,
  loginFailure,
  loginSuccess,
} from './actions/login.action';

export interface AuthState {
  access_token: string | null;
  refresh_token: string | null;
  user_id: number | null;
  error: HttpErrorResponse | string | null;
  isLoading: boolean;
}

export const initialState: AuthState = {
  access_token: null,
  refresh_token: null,
  user_id: null,
  error: null,
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(loginAction, (state) => ({
    ...state,
    access_token: null,
    refresh_token: null,
    user_id: null,
    error: null,
    isLoading: true,
  })),
  on(loginSuccess, (state, { access_token, refresh_token, user_id }) => ({
    ...state,
    access_token,
    refresh_token,
    user_id,
    error: null,
    isLoading: false,
  })),

  on(loginFailure, (state, { error }) => ({
    ...state,
    error,
    access_token: null,
    refresh_token: null,
    user_id: null,
    isLoading: false,
  }))
);
