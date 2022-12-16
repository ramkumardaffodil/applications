import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { catchError, mergeMap, map, switchMap } from 'rxjs';
import {
  createApplicationFailed,
  createApplicationSuccess,
  getAllApplicationFailed,
  getAllApplications,
  getAllApplicationsSuccess,
  removeApplicationFailed,
  removeApplicationSuccess,
  updateApplicationFailed,
  updateApplicationSuccess,
} from '../../actions/application';
import {
  CREATE_APPLICATION_INITIATE,
  GET_ALL_APPLICATION,
  REMOVE_APPLICATION,
  UPDATE_APPLICATION_INITIATE,
} from '../../actions/application/types';
import { ApplicationService } from '../../services/application/application.service';

@Injectable()
export class ApplicationEffect {
  constructor(
    private action: Actions,
    private application: ApplicationService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private store: Store<any>,
    private toaster: ToastrService
  ) {}
  createApplication = createEffect(() =>
    this.action.pipe(
      ofType(CREATE_APPLICATION_INITIATE),
      mergeMap((action: any) => {
        return this.application.createApplication(action.data).pipe(
          map((data: any) => {
            this.spinner.hide();
            this.router.navigateByUrl('/applications');
            this.toaster.success('Application created successfully');
            return createApplicationSuccess(data);
          }),
          catchError((error) => {
            this.spinner.hide();
            this.toaster.error('Error while creating application');
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

  removeApplication = createEffect(() =>
    this.action.pipe(
      ofType(REMOVE_APPLICATION),
      switchMap((action: any) =>
        this.application.removeApplication({ _id: action._id }).pipe(
          map((data) => {
            this.spinner.hide();
            this.toaster.success('Application delete successfully');
            this.store.dispatch(getAllApplications());
            return removeApplicationSuccess(data);
          }),
          catchError((error) => {
            this.spinner.hide();
            this.toaster.error('Unable to delete application');
            return removeApplicationFailed(error);
          })
        )
      )
    )
  );

  updateApplication = createEffect(() =>
    this.action.pipe(
      ofType(UPDATE_APPLICATION_INITIATE),
      mergeMap((action: any) => {
        return this.application.updateApplication(action.data).pipe(
          map((data) => {
            this.spinner.hide();
            this.router.navigateByUrl('/applications');
            this.toaster.success('Application updated successfully');

            return updateApplicationSuccess(data);
          }),
          catchError((error) => {
            this.spinner.hide();
            this.toaster.error('Unable to update application');
            return updateApplicationFailed(error);
          })
        );
      })
    )
  );
}
