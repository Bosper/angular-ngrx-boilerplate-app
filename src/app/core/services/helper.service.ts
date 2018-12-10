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
import { map, tap, catchError } from 'rxjs/operators';

const MESSAGES: Object = {}

@Injectable({
  providedIn: 'root'
})
//export class HelperService extends Http {
export class HelperService {

  private subject = new BehaviorSubject<Object>(MESSAGES);
  messages$: Observable<Object> = this.subject.asObservable()

  API_END_POINT: string = 'http://localhost:8080/api';
  public token: string;

  constructor(
    private http: HttpClient,
    // backend: XHRBackend,
    // defaultOptions: AngularReduxRequestOptions,
  ) {
    // super(backend, defaultOptions);
  }

  loadMessages(messages:Object) {
    this.subject.next(messages);
}

  getUserData(): Observable<any> {
    return this.http.get<any>(this.API_END_POINT + '/userData');
  }

  getMessages(): Observable<any> {
    return this.http.get<any>(this.API_END_POINT + '/messages');
  }

}