import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl } from "@angular/forms";

import { Store, select } from '@ngrx/store';
import { getUsers } from '../../core/redux/form.actions';

import { User } from '../../core/models/models';

import { HelperService } from "../../core/services/helper.service";

import { Observable } from 'rxjs';

import { AppStateEXT } from "../../core/models/models";

import {
  UsersFeatureStoreActions,
  UsersFeatureStoreSelectors
} from '../../core/redux/root-store/user';

@Component({
  selector: 'cms-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevelopmentComponent implements OnInit {
  userFeatureItems$: Observable<User[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  formGroup: FormGroup;
  formGroup2: FormGroup;
  formGroupNested: FormGroup;
  steps: Array<AbstractControl>;
  listItems$: Observable<User[]>;
  $messages: Observable<Object>;

  constructor(
    private _helper: HelperService, 
    private store: Store<any>,
    private _cd: ChangeDetectorRef,
    private _formBuilder: FormBuilder,
    private store$: Store<AppStateEXT>
  ) {
    this.steps = new Array;
    
    this.store.dispatch(getUsers());

    this.listItems$ = this.store.pipe(select(state => state.reducer['users']));
    this.$messages = this.store.pipe(select(state => state.reducer['translations']));

    this.formGroupNested = _formBuilder.group({
      formName: new FormControl('NESTED_FORM_COMPONENT'),
      formGroup1: _formBuilder.group({
        name: new FormControl(),
        displayName: new FormControl(),
        email: new FormControl(),
        adult: new FormControl(),
        selectField: new FormControl()
      }),
      formGroup2: _formBuilder.group({
        firstName: new FormControl(),
        lastName: new FormControl()
      })
    });
    
    this.formGroup = _formBuilder.group({
      formName: new FormControl('REGISTER_FORM_COMPONENT'),
      name: new FormControl(),
      displayName: new FormControl(),
      email: new FormControl(),
      adult: new FormControl(),
      selectField: new FormControl()
    });

    this.formGroup2 = _formBuilder.group({
      formName: new FormControl('EXTENDED_FORM_COMPONENT'),
      firstName: new FormControl(),
      lastName: new FormControl(),
      question: new FormControl(),
      date: new FormControl()
    });
    console.log('DEV: ', this.formGroup);
    

    this.steps.push(this.formGroup, this.formGroup2, this.formGroupNested);
  }

  ngOnInit() {
    this.userFeatureItems$ = this.store$.select(
      UsersFeatureStoreSelectors.selectAllUsersFeatureItems
    );

    this.error$ = this.store$.select(
      UsersFeatureStoreSelectors.selectUsersFeatureError
    );

    this.isLoading$ = this.store$.select(
      UsersFeatureStoreSelectors.selectUsersFeatureIsLoading
    );

    this.store$.dispatch(
      new UsersFeatureStoreActions.GetUsersRequestAction()
    );
  }

  ngDoCheck() {
    this._cd.markForCheck();
  }
}
