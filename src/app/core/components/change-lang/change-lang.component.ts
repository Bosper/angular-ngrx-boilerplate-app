import { Component, OnInit, Input, DoCheck, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatSelectChange } from '@angular/material';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'cms-select-language',
  templateUrl: './change-lang.component.html',
  styleUrls: ['./change-lang.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  
})
export class ChangeLangComponent implements OnInit, DoCheck {
  formGroupLang: FormGroup;
  $lang: Observable<string>;
  country: Object = {};
  @Input() countries: any[];

  constructor(
    private store: Store<any>,
    private _cd: ChangeDetectorRef,
    private dateAdapter: DateAdapter<any> 
    ) {

      // ToDo send from app.component
      this.$lang = this.store.pipe(select(state => state.reducer['language'].useLanguage));
    }

  ngOnInit() {
    this.$lang.subscribe((lang: string) => this.country = this.countries.find((country) => country.code === lang));
    this.formGroupLang = new FormGroup({
      useLanguage: new FormControl('')
    })
  }

  ngDoCheck() {
    this._cd.markForCheck();
  }


  change(change: MatSelectChange) {
    console.log("change_lang: ", change);
    this.dateAdapter.setLocale(change.value)
    // this.store.dispatch({type: SET_LANGUAGE, payload: {value: change.value}});
  }

}
