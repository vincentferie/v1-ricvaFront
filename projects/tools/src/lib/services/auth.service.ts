import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataToken, ResetData, VerifyData } from '../models/auth.model';
import { capitalize } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public jwtHelper: JwtHelperService = new JwtHelperService();
  protected url: string;

  constructor(protected http: HttpClient = null) { }

  login(credentials) {
    credentials = {email: credentials.username, mpass: credentials.password};
    return this.http.post(`${this.url}/auth/signin`, credentials)
      .pipe(
        map((res: any) => {
          if (res && res.data) {
            const dataToken = {
              access_token: res.data[0].token,
              expire_in: res.data[0].expiresIn,
              token_type: 'bearer',
              user: res.data[1]
            } as DataToken;
            this.removeLockScreen();
            this.setDataToken(dataToken);
          }
          return res;
        })
      );
  }

  refreshToken(body) {
    body = {...body, grant_type: 'refresh_token'};
    return this.http.post(`${this.url}/auth/refresh`, body)
      .pipe(
        map((res: DataToken) => {
          if (res) {
            this.removeLockScreen();
            res = {...res, user: this.getDataToken().user};
            this.setDataToken(res);
          }
          return res;
        })
      );
  }

  logout() {
    return this.http.delete(`${this.url}/auth/logout`);
  }

  logoutWithHeader() {
    const dataToken = this.getDataToken();
    const headers = {
      Authorization: `${capitalize(dataToken.token_type)} ${dataToken.access_token}`
    };
    return this.http.delete(`${this.url}/auth/logout`, { headers });
  }

  verifyEmail(body: VerifyData) {
    body = {...body, pathRedirectUrl: `${this.url}/auth/reset`};
    return this.http.post(`${this.url}/auth/forgotpassword`, body);
  }

  resetPassword(body: ResetData) {
    return this.http.post(`${this.url}/auth/resetpassword`, body);
  }

  getDataToken(): DataToken {
    return JSON.parse(localStorage.getItem('dataToken'));
  }

  setDataToken(value: DataToken): void {
    localStorage.setItem('dataToken', JSON.stringify(value));
  }

  removeDataToken() {
    localStorage.removeItem('dataToken');
  }

  getLockScreen(): DataToken {
    return JSON.parse(localStorage.getItem('lockScreen'));
  }

  setLockScreen(value: boolean): void {
    localStorage.setItem('lockScreen', JSON.stringify(value));
  }

  removeLockScreen() {
    localStorage.removeItem('lockScreen');
  }

  getUser() {
    const dataToken = this.getDataToken();
    return dataToken != null ? dataToken.user : {};
  }
}
