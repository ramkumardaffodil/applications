import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, of, map, exhaustMap } from 'rxjs';
import {
  createApplicationFailed,
  createApplicationSuccess,
  getAllApplicationFailed,
  getAllApplicationsSuccess,
} from '../../actions/application';
import {
  CREATE_APPLICATION_INITIATE,
  GET_ALL_APPLICATION,
} from '../../actions/application/types';
import { ApplicationService } from '../../services/application/application.service';

@Injectable()
export class ApplicationEffect {
  constructor(
    private action: Actions,
    private application: ApplicationService
  ) {}
  createApplication = createEffect(() =>
    this.action.pipe(
      ofType(CREATE_APPLICATION_INITIATE),
      mergeMap((action: any) => {
        return this.application.createApplication(action.data).pipe(
          map((data: any) => createApplicationSuccess(data)),
          catchError((error) => createApplicationFailed(error))
        );
      })
    )
  );

  getAllApplications = createEffect(() =>
    this.action.pipe(
      ofType(GET_ALL_APPLICATION),
      mergeMap(() =>
        this.application.getAllApplication().pipe(
          map((data) => getAllApplicationsSuccess(data)),
          catchError((error) => getAllApplicationFailed(error))
        )
      )
    )
  );
}
