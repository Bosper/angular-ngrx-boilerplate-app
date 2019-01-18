import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, Subject, throwError, BehaviorSubject} from 'rxjs';
import { map, tap, catchError, mapTo } from 'rxjs/operators';

import { RegisterFormComponent } from "../../extensions/development/components/register-form/register-form.component";
import { ExtendedFormComponent } from "../../extensions/development/components/extended-form/extended-form.component";
import { NestedFormComponent } from "../../extensions/development/components/nested-form/nested-form.component";
import { AdItem, User } from "../models/models";

const REGISTER_FORM_COMPONENT: string = 'REGISTER_FORM_COMPONENT';
const EXTENDED_FORM_COMPONENT: string = 'EXTENDED_FORM_COMPONENT';
const NESTED_FORM_COMPONENT: string = 'NESTED_FORM_COMPONENT';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})

export class HelperService {

  API_END_POINT: string = 'http://localhost:4800/api/';
  public token: string;

  constructor(
    private http: HttpClient,
  ) { }

  getMessages(): Observable<any> {
    return this.http.get<any>(this.API_END_POINT + 'messages');
  }

  getUsers(): Observable<string> {
    return this.http.get<string>(this.API_END_POINT + 'getUsers');
  }

  updateUser(user): Observable<string> {
    console.log('_service_get_user: ', user.payload.value.id, user.payload.option);
    return this.http.post<string>(this.API_END_POINT + 'updateUser', JSON.stringify({id: user.payload.value.id, value: user.payload.option}), httpOptions);
  }

  getLanguage(lang): Observable<string> {
    console.log('_service_get_language: ', lang.code);
    return this.http.get<string>(this.API_END_POINT + 'messages/' + lang.code);
  }

  getComponent(component: string) {
    console.log('_service_component_loaded: ', component);
    
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