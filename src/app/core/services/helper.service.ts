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

import { RegisterFormComponent } from "../../extensions/development/components/register-form/register-form.component";
import { ExtendedFormComponent } from "../../extensions/development/components/extended-form/extended-form.component";
import { NestedFormComponent } from "../../extensions/development/components/nested-form/nested-form.component";
import { AdItem } from "../models/models";

const REGISTER_FORM_COMPONENT: string = 'REGISTER_FORM_COMPONENT';
const EXTENDED_FORM_COMPONENT: string = 'EXTENDED_FORM_COMPONENT';
const NESTED_FORM_COMPONENT: string = 'NESTED_FORM_COMPONENT';

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

  updateUser(user): Observable<any> {
    return this.http.post<string>(this.API_END_POINT + '/getUsers', JSON.stringify(user), {withCredentials: true});
  }

  getComponent(component: string) {
    console.log('serv: ', component);
    
    switch (component) {
      case REGISTER_FORM_COMPONENT:
        return new AdItem(RegisterFormComponent, '')
        break;

      case EXTENDED_FORM_COMPONENT:
        return new AdItem(ExtendedFormComponent, '')
        break;

        case NESTED_FORM_COMPONENT:
          return new AdItem(NestedFormComponent, '')
      default:
        break;
    }
  }

}