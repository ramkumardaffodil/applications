import { createAction, props } from '@ngrx/store';
import {
  ILoginFailed,
  ILoginPayload,
  ILoginSuccess,
  IRegisterFailed,
  IRegisterPayload,
  IRegisterSuccess,
  IUserDetailFailed,
  IUserDetailSuccess,
} from '../../models/auth';
import {
  GET_USER_DETAILS,
  GET_USER_DETAILS_FAILED,
  GET_USER_DETAILS_SUCCESS,
  LOGIN_FAILED,
  LOGIN_INITIATE,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_INITIATE,
  REGISTER_SUCCESS,
} from './types';

const loginInitiate = createAction(LOGIN_INITIATE, props<ILoginPayload>());
const loginSuccess = createAction(LOGIN_SUCCESS, props<any>());
const loginError = createAction(LOGIN_FAILED, props<any>());

const registerInitiate = createAction(
  REGISTER_INITIATE,
  props<IRegisterPayload>()
);
const registerSuccess = createAction(REGISTER_SUCCESS, props<any>());
const registerError = createAction(REGISTER_FAILED, props<any>());

const getUserDetail = createAction(GET_USER_DETAILS);
const getUesrDetailSuccess = createAction(
  GET_USER_DETAILS_SUCCESS,
  props<any>()
);
const getUserDetailFailed = createAction(GET_USER_DETAILS_FAILED, props<any>());

export {
  loginInitiate,
  loginSuccess,
  loginError,
  registerInitiate,
  registerSuccess,
  registerError,
  getUserDetail,
  getUesrDetailSuccess,
  getUserDetailFailed,
};
