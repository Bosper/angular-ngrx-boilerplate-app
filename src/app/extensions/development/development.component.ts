import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Input, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormControlName, FormGroupDirective, FormGroupName } from "@angular/forms";

import { Store, select, createSelector } from '@ngrx/store';
import {getUsers} from '../../core/redux/form.actions';

import { AppState, BaseData, AppStateEXT, User } from '../../core/models/models';

import { HelperService } from "../../core/services/helper.service";

import { Observable } from 'rxjs';

@Component({
  selector: 'cms-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevelopmentComponent implements OnInit {
  @Input() messages: Object;
  model: Object;
  formGroup: FormGroup;
  formGroup2: FormGroup;
  formGroupNested: FormGroup;
  listItems$: Observable<User[]>;
  steps: any[];

  forms: Object = {
    formGroupNested: 'formGroupNested',
    formGroups: ['formGroup1', 'formGroup2']
  }

  constructor(
    private helper: HelperService, 
    private store: Store<any>,
    private _cd: ChangeDetectorRef,
    private _formBuilder: FormBuilder,
    private _cfr: ComponentFactoryResolver
  ) {
    this.store.dispatch(getUsers());
    this.store.select(state => state.reducer['users']).subscribe(state => console.log('state_dev component: ', state));
    this.listItems$ = this.store.pipe(select(state => state.reducer['users']));

    // this.formGroupNested = _formBuilder.group({
    //   formGroup1: _formBuilder.group({
    //     name: new FormControl(),
    //     displayName: new FormControl(),
    //     email: new FormControl(),
    //     adult: new FormControl(),
    //     selectField: new FormControl()
    //   }),
    //   formGroup2: _formBuilder.group({
    //     firstName: new FormControl(),
    //     lastName: new FormControl()
    //   })
    // });
    
    this.formGroup = _formBuilder.group({
      formName: new FormControl('REGISTER_FORM_COMPONENT') ,
      name: new FormControl(),
      displayName: new FormControl(),
      email: new FormControl(),
      adult: new FormControl(),
      selectField: new FormControl()
    })

    this.formGroup2 = _formBuilder.group({
      formName: new FormControl('EXTENDED_FORM_COMPONENT'),
      firstName: new FormControl(),
      lastName: new FormControl()
    })
  }

  ngOnInit() {

  }

  ngDoCheck() {
    this._cd.markForCheck();
  }
}
