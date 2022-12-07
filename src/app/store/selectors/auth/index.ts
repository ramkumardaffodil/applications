import { createSelector } from '@ngrx/store';
import { IAppState, IAuthState } from '../../models/auth';

const selectAuth = (state: IAppState) => state.auth;

const selectAuthState = createSelector(
  selectAuth,
  (state: IAuthState) => state
);

export { selectAuthState };
