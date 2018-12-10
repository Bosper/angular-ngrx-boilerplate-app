import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
    // Listen for the 'ADD' action

    // @Effect()
    // add$: Observable<Action> = this.actions$.pipe(
    //     ofType('ADD')
    // )

    constructor(private http: HttpClient, private actions$: Actions) {

    }
}