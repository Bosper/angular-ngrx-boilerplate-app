import { Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormControlName, FormGroupDirective } from "@angular/forms";
import { HelperService } from "./core/services/helper.service";

import { Store, select, createSelector } from '@ngrx/store';
import { AppState, User, UPDATE_USER } from './core/models/models';
import { RegisterBaseData } from "./core/models/base-data";

import {getUsers} from './core/redux/form.actions';

//Rxjs
import { Observable, Subscription, Observer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  formGroup: FormGroup;
  model: Object;
  listItems$: Observable<User[]>;

  messages: Observable<Object>;
  time: Observable<Object>;
  constructor(private helper: HelperService, private store: Store<AppState>, private cd: ChangeDetectorRef) {

    this.store.dispatch(getUsers());
    this.listItems$ = this.store.pipe(select(state => state.formGroup['users']));
    this.store.select(state => state.formGroup['users']).subscribe(state => console.log('state: ', state));
    
    this.time = new Observable<Object>((observer: Observer<Object>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
    
  }

  ngOnInit() {
    // ToDo Component
    this.formGroup = new FormGroup({
      name: new FormControl(),
      displayName: new FormControl(),
      email: new FormControl(),
      adult: new FormControl(),
      selectField: new FormControl()
    });

    this.helper.getMessages().subscribe((data) => {
      console.log('messages: ', data, typeof (data));
      this.messages = JSON.parse(data);
    });

    // this.helper.getUserData().subscribe((data) => {
    //   this.model = data; console.log('model: ', this.model);
    //   (this.model && this.model) ? this.injectFormData() : null;
    // });
    // this.formGroup.valueChanges.subscribe((change) => console.log(change));
  }

  ngDoCheck() {
    this.cd.markForCheck();
  }

  checkStateItems() {
    this.store.select(state => state.formGroup).subscribe(state => {
      console.log('state_store: ', state)
    });
    
  }

  userUpdate(v: any) {
    // this.store.dispatch({ v, type: UPDATE_USER })
  }

  // protected injectFormData() {
  //   let keys = Object.keys(this.model);
  //   let prop = Object.getOwnPropertyDescriptors(this.model);

  //   console.log('keys: ', keys, 'props: ', prop.name.value.data, prop);
  //   (this.model && keys) ? keys.forEach((key: string) => {
  //     console.log('has data? ', this.model[key].hasOwnProperty('data'));
  //     if (this.model[key].hasOwnProperty('data')) {
  //     console.log('key: ', key, this.model[key], this.getValue(this.model[key]))
  //     this.formGroup.controls[key].patchValue(this.getValue(this.model[key]));
  //     }
  //   }) : null;
  // }

  // private getValue(object: Object) {
  //     let prop =  Object.getOwnPropertyDescriptor(object, 'data');
  //     console.log('object: ', object, 'prop: ', prop);
  //     return prop.value;
  // }

  private saveBaseInformation() {
    let name = this.formGroup.get('name').value;
    let email = this.formGroup.get('email').value;
    let password = this.formGroup.get('password').value;
    console.log(this.formGroup.get('name').value);
    // this.store.dispatch({ name, email, password, type: SAVE_BASE_DATA })
  }

  private agreementCheck() {
    // console.log('checkbox: ', !this.formGroup.get('agreement').value);
    // this.store.dispatch({ agreement: this.formGroup.get('agreement').value, type: TOGGLE_CHECKBOX })
  }
}