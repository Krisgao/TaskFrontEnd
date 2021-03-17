import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError, pipe } from 'rxjs';
import { TokenValues } from '../TokenValues';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AccessToken: string = '';
  constructor(private http: HttpClient) {}

  private TokenAPI = 'https://localhost:44388';

  validateUser(userName, password) {
    var userData =
      'username=' + userName + '&password=' + password + '&grant_type=password';
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http
      .post(this.TokenAPI + '/Token', userData, {
        headers: reqHeader,
      })
      .pipe(map((res) => res));
  }
}
