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
  // @Input('connectForm') path: string;
  @Input('connectForm') path: any;
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
    .pipe(select('reducer'))
    .pipe(take(1))
    .subscribe(val => {
      console.log('connect_form_multi: ', val, this.path), 
      this.path.formGroups.forEach(formGroup => this.formGroupDirective.form.controls[formGroup].patchValue(val.formGroupNested[formGroup]));
    })
      

    this.formChange$ = this.formGroupDirective.form.valueChanges
      .subscribe(value => {
        console.log('connect_form_multi_change: ', value, this.path);

        this.store.dispatch({
          type: UPDATE_FORM,
          payload: {
            value,
            path: this.path, // newStory
          }
        });
      });

      //ToDo: Form reset
      /*this.formSuccess$ = this.actions$
      .ofType(FORM_SUBMIT_SUCCESS)
      .filter(( { payload } ) => payload.path === this.path)
      .subscribe(() => {
        this.formGroupDirective.form.reset();
        this.success.emit();
      });*/ 
  }

  ngOnDestroy() {
    this.formChange$.unsubscribe();
  }
}