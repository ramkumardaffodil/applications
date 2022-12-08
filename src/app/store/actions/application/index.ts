import { createAction, props } from '@ngrx/store';
import {
  CREATE_APPLICATION_FAILED,
  CREATE_APPLICATION_INITIATE,
  CREATE_APPLICATION_SUCCESS,
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

export { createApplication, createApplicationSuccess, createApplicationFailed };
