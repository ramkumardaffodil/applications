import { createReducer, on } from '@ngrx/store';
import {
  createApplicationFailed,
  createApplicationSuccess,
} from '../../actions/application';

const initialState = {
  applications: [],
  error: '',
};

const applicationReducer = createReducer(
  initialState,
  on(createApplicationSuccess, (state: any, { application }) => {
    debugger;
    return {
      ...state,
      applications: [...state.applications, application],
    };
  }),
  on(createApplicationFailed, (state, data) => {
    debugger;
    return {
      ...state,
      error: data.error,
    };
  })
);
export default applicationReducer;
