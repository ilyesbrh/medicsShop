
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { tap, mapTo, catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginBody, LoginResponse, RegisterBody, UserModel } from '../models/models';

const JWT_TOKEN = 'JWT_TOKEN';
const LANGUAGE = 'user language';
const USER = 'user object';

@Injectable({
  providedIn: 'root'
})
export class AuthManagerService {

  RETRY_SECONDS = 10;
  jwt: any;
  user: UserModel | null = null;

  /* Objects to persist */

  constructor(private http: HttpClient, private router: Router) { }

  register(data: RegisterBody): Observable<any> {
    return this.http.post<LoginResponse>(environment.api + 'authentication/register', data).pipe(
      tap(result => this.doLoginUser(result)),
      mapTo({ success: true, message: 'welcome again' }),
      catchError(error => {

        return of({ success: false, message: 'Your mail or password incorrect' });
      }));
  }
  login(data: LoginBody): Observable<{ success: boolean, message: string, result: any }> {
    return this.http.post<LoginResponse>(environment.api + 'authentication/login', data).pipe(
      tap(result => this.doLoginUser(result)),
      map((result: any) => { return { success: true, message: 'welcome again', result: result } }),
      catchError(error => {
        return of({ success: false, message: 'Your mail or password incorrect', result: error });
      }));
  }

  async logout(): Promise<boolean> {

    this.doLogoutUser();
    this.router.navigate(['/authentication/login']);
    return true;
  }


  isLoggedIn(): boolean {
    return !!this.jwt;
  }

  getJwtToken(): any {
    return this.jwt;
  }

  private doLoginUser(result: LoginResponse): void {
    this.jwt = result.jwt;
    this.user = result.user;
  }

  private doLogoutUser(): void {
    localStorage.clear();
  }

}
