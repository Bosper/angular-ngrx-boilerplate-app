import { Directive, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Action, Store, select } from "@ngrx/store";
import { Actions, Effect, ofType } from '@ngrx/effects';

import { FormGroupDirective } from "@angular/forms";

import { AppState, UPDATE_FORM, FORM_SUBMIT_SUCCESS, UPDATE_FORM_SINGLE } from "../models/models";

import { take, filter } from 'rxjs/operators';
import { Observable, Observer, Subscription } from 'rxjs';

@Directive({
  selector: '[connectFormSingle]'
})

export class ConnectFormSingleDirective {
  @Input('connectFormSingle') path: string;
  @Output() success = new EventEmitter();

  formChange$: Subscription;
  formSuccess$: Subscription;

  constructor(
    private formGroupDirective: FormGroupDirective,
    private store: Store<any>,
    private actions$ : Actions
  ) {

  }

  ngOnInit() {

    // Update the form value based on the state
    this.store
    .pipe(select('reducer'))
    .pipe(take(1))
    .subscribe(val => {
      console.log('connect_form: ', val, this.path, this.formGroupDirective, this.path.length);
      
      this.formGroupDirective.form.patchValue(val[this.path]);
    })
      

    this.formChange$ = this.formGroupDirective.form.valueChanges
      .subscribe(value => {
        console.log('connect_form_change: ', value, '\npath: ', this.path, this.formGroupDirective);

        this.store.dispatch({
          type: UPDATE_FORM_SINGLE,
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