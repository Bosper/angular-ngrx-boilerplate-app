import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action, ActionReducer } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { ActionExt } from "../models/models";

import { HelperService } from "../services/helper.service";

@Injectable()
export class UserEffects {

    // Listen for 'GET' action
    @Effect()
    getUsers$: Observable<Action> = this.actions$.pipe(
        ofType('GET_USERS'),
        // switchMap(() => { return this.http.get<string>('http://localhost:4800/api/getUsers').pipe(map(users => ({ type: 'GET_USERS_SUCCESS', payload: JSON.parse(users) })),
        switchMap(() => { return this.helperService.getUsers().pipe(map(users => ({ type: 'GET_USERS_SUCCESS', payload: JSON.parse(users) })),
        catchError(error => of({ type: 'GET_USERS_ERROR', error: error })))})
    )

    // @Effect()
    // updateUser$: Observable<Action> = this.actions$.pipe(
    //     ofType('UPDATE_USER_DATA'),
    //     switchMap((user) => { return this.helperService.updateUsers(user).pipe(map(users => ({ type: 'UPDATE_USER_DATA_SUCCESS', payload: JSON.parse(users) })),
    // )

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