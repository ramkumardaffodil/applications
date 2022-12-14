import { createAction, props } from '@ngrx/store';
import {
  ICreateApplication,
  ICreateApplicationError,
  ICreateApplicationSuccess,
  IGetUserDetailError,
  IGetUserDetailSuccess,
} from '../../models/application';
import {
  CREATE_APPLICATION_FAILED,
  CREATE_APPLICATION_INITIATE,
  CREATE_APPLICATION_SUCCESS,
  GET_ALL_APPLICATION,
  GET_ALL_APPLICATION_FAILED,
  GET_ALL_APPLICATION_SUCCESS,
} from './types';

const createApplication = createAction(
  CREATE_APPLICATION_INITIATE,
  props<any>()
);

const createApplicationSuccess = createAction(
  CREATE_APPLICATION_SUCCESS,
  props<any>()
);

const createApplicationFailed = createAction(
  CREATE_APPLICATION_FAILED,
  props<any>()
);

const getAllApplications = createAction(GET_ALL_APPLICATION);

const getAllApplicationsSuccess = createAction(
  GET_ALL_APPLICATION_SUCCESS,
  props<any>()
);

const getAllApplicationFailed = createAction(
  GET_ALL_APPLICATION_FAILED,
  props<any>()
);

export {
  createApplication,
  createApplicationSuccess,
  createApplicationFailed,
  getAllApplications,
  getAllApplicationsSuccess,
  getAllApplicationFailed,
};
