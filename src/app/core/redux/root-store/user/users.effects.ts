import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { HelperService } from "../../../services/helper.service";

import * as featureActions from './users.actions';

@Injectable()
export class UserEffects {
    constructor(private http: HttpClient, private actions$: Actions, private helperService: HelperService) { }

    @Effect()
    getUsersRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.GetUsersRequestAction>(
            featureActions.ActionTypes.GET_USERS_REQUEST
        ),
        switchMap(() =>
            this.helperService
                .getUsersAction()
                .pipe(
                    map(
                        users => new featureActions.GetUsersSuccessAction({
                            users: JSON.parse(users)
                        })
                    ),
                    catchError(error =>
                        observableOf(
                            new featureActions.GetUsersFailureAction({ error })
                        )
                    )
                )
        )
    );
}