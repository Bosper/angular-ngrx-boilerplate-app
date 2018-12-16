import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormControlName, FormGroupDirective } from "@angular/forms";

import { Store, select, createSelector } from '@ngrx/store';
import {getUsers} from '../../core/redux/form.actions';

import { AppState, User } from '../../core/models/models';

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
  listItems$: Observable<User[]>;

  constructor(
    private helper: HelperService, 
    private store: Store<AppState>,
    private _cd: ChangeDetectorRef,
  ) {
    this.store.dispatch(getUsers());
    this.store.select(state => state.formGroup['users']).subscribe(state => console.log('state_dev component: ', state));
    this.listItems$ = this.store.pipe(select(state => state.formGroup['users']));
    
    this.formGroup = new FormGroup({
      name: new FormControl(),
      displayName: new FormControl(),
      email: new FormControl(),
      adult: new FormControl(),
      selectField: new FormControl()
    });
  }

  ngOnInit() {

  }

  ngDoCheck() {
    this._cd.markForCheck();
  }
}
