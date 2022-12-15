import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, mergeMap, map } from 'rxjs';
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
    private application: ApplicationService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}
  createApplication = createEffect(() =>
    this.action.pipe(
      ofType(CREATE_APPLICATION_INITIATE),
      mergeMap((action: any) => {
        return this.application.createApplication(action.data).pipe(
          map((data: any) => {
            this.spinner.hide();
            this.router.navigateByUrl('/applications');
            return createApplicationSuccess(data);
          }),
          catchError((error) => {
            this.spinner.hide();
            return createApplicationFailed(error);
          })
        );
      })
    )
  );

  getAllApplications = createEffect(() =>
    this.action.pipe(
      ofType(GET_ALL_APPLICATION),
      mergeMap(() =>
        this.application.getAllApplication().pipe(
          map((data) => {
            this.spinner.hide();
            return getAllApplicationsSuccess(data);
          }),
          catchError((error) => {
            this.spinner.hide();
            return getAllApplicationFailed(error);
          })
        )
      )
    )
  );
}
