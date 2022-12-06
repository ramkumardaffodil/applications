import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    debugger;
    const unauthorizedUrl = ['sign-up', 'sign-in', 'token'];
    if (unauthorizedUrl.some((el) => request.url.includes(el))) {
      return next.handle(request);
    }
    const updatedRequest = request.clone({
      headers: request.headers.append('authorization', 'Bearer token'),
    });

    return next.handle(updatedRequest);
  }
}
