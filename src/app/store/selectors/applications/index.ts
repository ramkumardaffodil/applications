import { createSelector } from '@ngrx/store';
import { ICreateApplicationSuccess } from '../../models/application';
import { IAppState } from '../../models/auth';

const selectApplications = createSelector(
  (state: IAppState) => state.application.applications,
  (state: Array<ICreateApplicationSuccess>) => state
);

export { selectApplications };
