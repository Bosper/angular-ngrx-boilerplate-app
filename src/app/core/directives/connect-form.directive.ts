import { Directive, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Action, Store, select } from "@ngrx/store";
import { Actions, Effect, ofType } from '@ngrx/effects';

import { FormGroupDirective } from "@angular/forms";

import { AppState, UPDATE_FORM, FORM_SUBMIT_SUCCESS } from "../models/models";

import { take, filter } from 'rxjs/operators';
import { Observable, Observer, Subscription } from 'rxjs';

@Directive({
  selector: '[connectForm]'
})

export class ConnectFormDirective {
  @Input('connectForm') path: string;
  @Output() success = new EventEmitter();

  formChange$: Subscription;
  formSuccess$: Subscription;

  constructor(
    private formGroupDirective: FormGroupDirective,
    private store: Store<AppState>,
    private actions$ : Actions
  ) {

  }

  ngOnInit() {

    // Update the form value based on the state
    this.store
    .pipe(select('formGroup'))
    .pipe(take(1))
    .subscribe(val => this.formGroupDirective.form.patchValue(val.formGroup))
      

    this.formChange$ = this.formGroupDirective.form.valueChanges
      .subscribe(value => {
        console.log('FORM_CHANGE: ', value, '\nPATH: ', this.path);

        this.store.dispatch({
          type: UPDATE_FORM,
          payload: {
            value,
            path: this.path, // newStory
          }
        });
      });

      // this.formSuccess$ = this.actions$
      // .ofType(FORM_SUBMIT_SUCCESS)
      // .filter(( { payload } ) => payload.path === this.path)
      // .subscribe(() => {
      //   this.formGroupDirective.form.reset();
      //   this.success.emit();
      // });

      
  }

  ngOnDestroy() {
    this.formChange$.unsubscribe();
  }
}