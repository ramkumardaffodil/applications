import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, of, map } from 'rxjs';
import {
  createApplicationFailed,
  createApplicationSuccess,
} from '../../actions/application';
import { CREATE_APPLICATION_INITIATE } from '../../actions/application/types';
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
        debugger;
        return this.application.createApplication(action.data).pipe(
          map((data: any) => createApplicationSuccess(data)),
          catchError((error) => of(createApplicationFailed(error)))
        );
      })
    )
  );
}
