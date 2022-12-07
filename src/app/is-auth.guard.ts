import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './store/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      (this.auth.getUserDetail() &&
        route.routeConfig?.path?.includes('login')) ||
      route.routeConfig?.path?.includes('register')
    ) {
      this.router.navigateByUrl('/applications');
      return false;
    }
    if (this.auth.getUserDetail()) return true;
    return false;
  }
}
