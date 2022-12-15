import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CacheService } from './shared/services/cache.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthGuard implements CanActivate {
  constructor(private cache: CacheService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      (this.cache.getUserId() && route.routeConfig?.path?.includes('login')) ||
      route.routeConfig?.path?.includes('register')
    ) {
      this.router.navigateByUrl('/applications');
      return false;
    }
    if (this.cache.getUserId()) return true;
    this.router.navigateByUrl('/login');
    return false;
  }
}
