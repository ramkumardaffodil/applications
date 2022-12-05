import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import authActions from '../../actions/auth';
import authTypes from '../../actions/auth/types';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffect {
  constructor(private action: Actions, private auth: AuthService) {}
  register = createEffect(() =>
    this.action.pipe(
      ofType(authTypes.REGISTER_INITIATE),
      mergeMap((action: any) =>
        this.auth
          .register({ email: action.email, password: action.password })
          .pipe(
            map((data) => authActions.registerSuccess(data)),
            catchError((error) => of(authActions.registerError(error)))
          )
      )
    )
  );
  login = createEffect(() =>
    this.action.pipe(
      ofType(authTypes.LOGIN_INITIATE),
      mergeMap((action: any) =>
        this.auth
          .login({ email: action.email, password: action.password })
          .pipe(
            map((data) => authActions.loginSuccess(data)),
            catchError((error) => of(authActions.loginError({ data: error })))
          )
      )
    )
  );
}
