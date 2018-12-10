import { Directive, OnInit, Input, Injectable } from '@angular/core';
import { Store, select } from "@ngrx/store";

import { FormGroupDirective } from "@angular/forms";

import { AppState, UPDATE_FORM } from "../models/models";

import { take } from 'rxjs/operators';
import { Observable, Observer, Subscription } from 'rxjs';

@Directive({
  selector: '[connectForm]'
})

export class ConnectFormDirective {
  @Input('connectForm') path: string;
  formChange$: Subscription;

  constructor(
    private formGroupDirective: FormGroupDirective,
    private store: Store<AppState>,
    // private actions$ : Action
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
      })
  }

  ngOnDestroy() {
    this.formChange$.unsubscribe();
  }
}