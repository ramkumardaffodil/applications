import { createReducer, on } from '@ngrx/store';
import {
  createApplicationFailed,
  createApplicationSuccess,
  getAllApplicationFailed,
  getAllApplicationsSuccess,
  removeApplicationFailed,
  removeApplicationSuccess,
  updateApplicationFailed,
  updateApplicationSuccess,
} from '../../actions/application';

const initialState = {
  applications: [],
  error: '',
};

const applicationReducer = createReducer(
  initialState,
  on(createApplicationSuccess, (state: any, { application }) => {
    return {
      ...state,
      applications: [...state.applications, application],
    };
  }),
  on(createApplicationFailed, (state, data) => {
    return {
      ...state,
      error: data.error,
    };
  }),
  on(updateApplicationSuccess, (state: any, { application }) => {
    return {
      ...state,
    };
  }),
  on(updateApplicationFailed, (state, data) => {
    return {
      ...state,
      error: data.error,
    };
  }),
  on(getAllApplicationsSuccess, (state: any, { data }) => {
    return {
      ...state,
      applications: [...data],
    };
  }),
  on(getAllApplicationFailed, (state, data) => {
    return {
      ...state,
      error: data.error,
    };
  }),
  on(removeApplicationSuccess, (state, data) => {
    return {
      ...state,
    };
  }),
  on(removeApplicationFailed, (state, data) => {
    return {
      ...state,
    };
  })
);
export default applicationReducer;
