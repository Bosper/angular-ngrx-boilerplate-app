import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Http,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Request,
  Headers,
  // XHRBackend
} from '@angular/http';

import { Observable, Subject, throwError, BehaviorSubject} from 'rxjs';
import { map, tap, catchError, mapTo } from 'rxjs/operators';

const MESSAGES: Object[] = [];

@Injectable({
  providedIn: 'root'
})
//export class HelperService extends Http {
export class HelperService {

  API_END_POINT: string = 'http://localhost:4800/api';
  public token: string;

  constructor(
    private http: HttpClient,
  ) {
  }

  getUserData(): Observable<any> {
    return this.http.get<any>(this.API_END_POINT + '/userData');
  }

  getMessages(): Observable<any> {
    return this.http.get<any>(this.API_END_POINT + '/messages');
  }

  getUsers() {
    return this.http.get<string>(this.API_END_POINT + '/getUsers');
  }

}