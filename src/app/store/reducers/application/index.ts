import { createReducer, on } from '@ngrx/store';
import {
  createApplicationFailed,
  createApplicationSuccess,
  getAllApplicationFailed,
  getAllApplicationsSuccess,
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
  })
);
export default applicationReducer;
