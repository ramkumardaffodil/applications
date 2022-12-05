import { createReducer, on } from '@ngrx/store';
import authActions from '../../actions/auth';
import { IAuthState } from '../../models/auth';

const initialState: IAuthState = {
  userId: '',
  accessToken: '',
  refreshToken: '',
  errorMessage: '',
  loading: false,
};

const authReducer = createReducer(
  initialState,
  on(authActions.loginInitiate, (state: IAuthState) => {
    return {
      ...state,
      loading: true,
      errorMessage: '',
    };
  }),
  on(authActions.loginSuccess, (state: IAuthState, data) => {
    return {
      ...state,
      userId: data.userId,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      loading: false,
      errorMessage: '',
    };
  }),
  on(authActions.loginError, (state: IAuthState, data) => {
    return {
      ...state,
      loading: false,
      errorMessage: data.error,
    };
  }),
  on(authActions.registerInitiate, (state: IAuthState) => {
    return {
      ...state,
      loading: true,
      errorMessage: '',
    };
  }),
  on(authActions.registerSuccess, (state: IAuthState, data) => {
    return {
      ...state,
      userId: data.userId,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      loading: false,
      errorMessage: '',
    };
  }),
  on(authActions.registerError, (state: IAuthState, data) => {
    return {
      ...state,
      loading: false,
      errorMessage: data.error,
    };
  })
);

export default authReducer;
