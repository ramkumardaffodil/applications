interface ILoginPayload {
  email: string;
  password: string;
}
interface IRegisterPayload {
  email: string;
  password: string;
}
interface IAuthState {
  userId?: string;
  accessToken?: string;
  refreshToken?: string;
  errorMessage?: string;
  loading?: boolean;
}
interface IAppState {
  auth: IAuthState;
}
export { ILoginPayload, IRegisterPayload, IAuthState, IAppState };
