import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CacheService } from 'src/app/shared/services/cache.service';
import {
  getUesrDetailSuccess,
  getUserDetailFailed,
  loginError,
  loginSuccess,
  registerError,
  registerSuccess,
} from '../../actions/auth';
import {
  GET_USER_DETAILS,
  LOGIN_INITIATE,
  REGISTER_INITIATE,
} from '../../actions/auth/types';
import { ILoginMergeMapAction, ILoginSuccess } from '../../models/auth';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffect {
  constructor(
    private action: Actions,
    private auth: AuthService,
    private router: Router,
    private cache: CacheService
  ) {}
  register = createEffect(() =>
    this.action.pipe(
      ofType(REGISTER_INITIATE),
      mergeMap((action: any) => {
        return this.auth
          .register({ email: action.email, password: action.password })
          .pipe(
            map((data: any) => {
              this.cache.cacheUserDetail(data);
              return registerSuccess(data);
            }),
            catchError((error) => registerError(error))
          );
      })
    )
  );
  login = createEffect(() =>
    this.action.pipe(
      ofType(LOGIN_INITIATE),
      mergeMap((action: ILoginMergeMapAction) =>
        this.auth
          .login({ email: action.email, password: action.password })
          .pipe(
            map((data) => {
              this.cache.cacheUserDetail(data);
              this.router.navigateByUrl('/applications');
              return loginSuccess(data);
            }),
            catchError((error) => loginError({ data: error }))
          )
      )
    )
  );
  getUserDetails = createEffect(() =>
    this.action.pipe(
      ofType(GET_USER_DETAILS),
      mergeMap(() =>
        this.auth.getUserDetail().pipe(
          map((data) => {
            this.cache.cacheUserDetail(data);
            this.router.navigateByUrl('/applications');
            return getUesrDetailSuccess(data);
          }),
          catchError((error) => getUserDetailFailed(error))
        )
      )
    )
  );
}
