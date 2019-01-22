import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action, ActionReducer } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, of as observableOf } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { ActionExt } from "../models/models";

import { HelperService } from "../services/helper.service";

import * as featureActions from './root-store/user/users.actions';

@Injectable()
export class FormEffects {

    @Effect()
    getTranslation$: Observable<Action> = this.actions$.pipe(
        ofType('GET_MESSAGES'),
        switchMap((lang) => {
            return this.helperService.getLanguage(lang).pipe(map(messages => ({ type: 'GET_MESSAGES_SUCCESS', payload: JSON.parse(messages) })),
                catchError(error => of({ type: 'GET_MESSAGES_ERROR', error: error })))
        })
    )

    @Effect()
    getUsers$: Observable<Action> = this.actions$.pipe(
        ofType('GET_USERS'),
        switchMap(() => {
            return this.helperService.getUsers().pipe(map(users => ({ type: 'GET_USERS_SUCCESS', payload: JSON.parse(users) })),
                catchError(error => of({ type: 'GET_USERS_ERROR', error: error })))
        })
    )

    // Listen for the 'UPDATE USER' action
    @Effect()
    updateUser$: Observable<Action> = this.actions$.pipe(
        ofType('UPDATE_USER_DATA'),
        // switchMap((user) => { return this.helperService.updateUser(user).pipe(map(user => ({ type: 'UPDATE_USER_DATA_SUCCESS', payload: JSON.parse(user) })),
        switchMap((user) => {
            return this.helperService.updateUser(user).pipe(map(userResp => { console.log('userEffect: ', user, userResp, typeof (userResp)); return ({ type: 'UPDATE_USER_DATA_SUCCESS', payload: JSON.parse(userResp) }) }),
                catchError(error => of({ type: 'UPDATE_USER_DATA_ERROR', error: error })))
        })
    )

    // Listen for the 'ADD' action
    // @Effect()
    // addUser$: Observable<ActionExt> = this.actions$.pipe(
    //     ofType('ADD_USERS'),
    //     mergeMap((action:ActionExt) => 
    //     this.http.post('/loadUsers', action.payload)
    //     .pipe(map(data => 
    //         ({ type: 'LOGIN_SUCCESS', payload: data })),catchError(() => of({ type: 'LOGIN_FAILED' }))))
    // )

    constructor(private http: HttpClient, private actions$: Actions, private helperService: HelperService) {

    }
}