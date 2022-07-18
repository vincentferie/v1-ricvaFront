import { Injectable } from '@angular/core';
import {
  HttpRequest, HttpHandler, HttpEvent, HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap, } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { capitalize } from '../utils';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private refreshInProgress$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = this.notIntercept(request) ? request : this.addAuthenticationToken(request);
    return next.handle(req).pipe(
      catchError(error => {
        if (this.notIntercept(request)) {
          if (this.isRefresh(request)) {
            this.logout();
          }
          return throwError(error);
        }
        switch (error.status) {
          case 401: return this.handle401Error(request, next);
          default: return throwError(error);
        }
      })
    );
  }

  notIntercept(request) {
    return !this.authService.getDataToken() || this.authService.getLockScreen() || request.url.includes('oauth');
  }

  isRefresh(request) {
    return request.url.includes('oauth/refresh');
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.refreshInProgress$.getValue()) {
      this.refreshInProgress$.next(true);
      const body = {refresh_token: this.authService.getDataToken().refresh_token};
      this.authService.refreshToken(body).subscribe(() => this.refreshInProgress$.next(false));
    }
    return this.refreshInProgress$.pipe(
      filter(result => result === false),
      take(1),
      switchMap(() => this.runRequest(request, next))
    );
  }

  private runRequest(request: HttpRequest<any>, next: HttpHandler) {
    return this.authService.getDataToken() ? next.handle(this.addAuthenticationToken(request)) : throwError(new Error('Unauthenticated'));
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    const dataToken = this.authService.getDataToken();
    return request.clone({
      setHeaders: {
        Authorization: `${capitalize(dataToken.token_type)} ${dataToken.access_token}`
      }
    });
  }

  private logout() {
    this.authService.removeLockScreen();
    this.authService.removeDataToken();
    location.reload();
  }
}
