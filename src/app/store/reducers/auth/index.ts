import { createReducer, on } from '@ngrx/store';
import {
  getUesrDetailSuccess,
  getUserDetailFailed,
  loginError,
  loginInitiate,
  loginSuccess,
  registerError,
  registerInitiate,
  registerSuccess,
} from '../../actions/auth';
import { IAuthState } from '../../models/auth';

const initialState: IAuthState = {
  userId: null,
  accessToken: null,
  refreshToken: null,
  errorMessage: null,
  loading: false,
};

const authReducer = createReducer(
  initialState,
  on(loginInitiate, (state: IAuthState) => {
    return {
      ...state,
      loading: true,
      errorMessage: '',
    };
  }),
  on(loginSuccess, (state: IAuthState, data) => {
    return {
      ...state,
      userId: data.userId,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      loading: false,
      errorMessage: '',
    };
  }),
  on(loginError, (state: IAuthState, data) => {
    return {
      ...state,
      loading: false,
      errorMessage: data.error,
    };
  }),
  on(registerInitiate, (state: IAuthState) => {
    return {
      ...state,
      loading: true,
      errorMessage: '',
    };
  }),
  on(registerSuccess, (state: IAuthState, data) => {
    return {
      ...state,
      userId: data.userId,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      loading: false,
      errorMessage: '',
    };
  }),
  on(registerError, (state: IAuthState, data) => {
    return {
      ...state,
      userId: null,
      accessToken: null,
      refreshToken: null,
      loading: false,
      errorMessage: data.error,
    };
  }),
  on(getUesrDetailSuccess, (state: IAuthState, data) => {
    return {
      ...state,
      userId: data.userId,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      loading: false,
      errorMessage: '',
    };
  }),
  on(getUserDetailFailed, (state: IAuthState, data) => {
    return {
      ...state,
      userId: null,
      accessToken: null,
      refreshToken: null,
      loading: false,
      errorMessage: data.error,
    };
  })
);

export default authReducer;
