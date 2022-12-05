import { createAction, props } from '@ngrx/store';
import authTypes from './types';

const loginInitiate = createAction(authTypes.LOGIN_INITIATE, props<any>());
const loginSuccess = createAction(authTypes.LOGIN_SUCCESS, props<any>());
const loginError = createAction(authTypes.LOGIN_FAILED, props<any>());

const registerInitiate = createAction(
  authTypes.REGISTER_INITIATE,
  props<any>()
);
const registerSuccess = createAction(authTypes.REGISTER_SUCCESS, props<any>());
const registerError = createAction(authTypes.REGISTER_FAILED, props<any>());

const authActions = {
  loginInitiate,
  loginSuccess,
  loginError,
  registerInitiate,
  registerSuccess,
  registerError,
};

export default authActions;
