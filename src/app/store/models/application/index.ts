import { IError } from '../index';

interface ICreateApplication {
  userId: string;
  firstName: string;
  lastName: string;
  gender: Array<IOption>;
  country: Array<IOption>;
  interests: Array<IOption>;
  phoneNumber: string;
  termAndConditon: boolean;
  favouriteLanguage: Array<IOption>;
  imageUrl: string;
}

interface IOption {
  value: string;
  viewValue: string;
}

interface ICreateApplicationSuccess extends ICreateApplication {
  _id: string;
}

interface ICreateApplicationError extends IError {}
interface IGetUserDetailSuccess {
  userId: string;
  accessToken: string;
  refreshToken: string;
}
interface IGetUserDetailError extends IError {}

interface IApplicationState {
  applications: Array<ICreateApplicationSuccess>;
}

export {
  ICreateApplication,
  IOption,
  ICreateApplicationSuccess,
  ICreateApplicationError,
  IGetUserDetailSuccess,
  IGetUserDetailError,
  IApplicationState,
};
