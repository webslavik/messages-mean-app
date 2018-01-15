import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

import { ErrorService } from "../error/error.service";
import { User } from "./user.model";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private errorService: ErrorService) {}

  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/user', body, {headers: headers})
      .map(response => { return response })
      .catch(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      });
  }

  signin(user: User) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
      .map(response => { return response })
      .catch(error => {
        this.errorService.handleError(error.error);
        return Observable.throw(error);
      });
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}