import { IMergeMapAction } from '..';
import { IApplicationState } from '../application';

interface ILoginPayload {
  email: string;
  password: string;
}

interface ILoginSuccess {
  userId: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

interface ILoginFailed {
  error: string;
}
interface IRegisterPayload {
  email: string;
  password: string;
}

interface IRegisterSuccess {
  userId: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}
interface IRegisterFailed {
  error: string;
}

interface IUserDetailSuccess {
  userId: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

interface IUserDetailFailed {
  error: string | null;
}

interface ILoginMergeMapAction extends IMergeMapAction, ILoginPayload {}

interface IAuthState {
  userId?: string | null;
  accessToken?: string | null;
  refreshToken?: string | null;
  errorMessage?: string | null;
  loading?: boolean;
}
interface IAppState {
  auth: IAuthState;
  application: IApplicationState;
}

export {
  ILoginPayload,
  IRegisterPayload,
  IAuthState,
  IAppState,
  ILoginSuccess,
  ILoginFailed,
  IRegisterSuccess,
  IRegisterFailed,
  IUserDetailSuccess,
  IUserDetailFailed,
  ILoginMergeMapAction,
};
