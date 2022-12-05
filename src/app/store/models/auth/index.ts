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
export { ILoginPayload, IRegisterPayload, IAuthState };
