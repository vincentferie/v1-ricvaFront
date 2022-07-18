import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../../../../tools/src/lib/services/auth.service';

@Injectable({ providedIn: 'root' })
export class LockGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.auth.getLockScreen()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/auth/lock-screen'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
