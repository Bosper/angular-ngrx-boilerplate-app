import { Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HelperService } from "./core/services/helper.service";
import { Router } from "@angular/router";

import { Store, select, createSelector } from '@ngrx/store';
import { AppStateEXT} from './core/models/models';

//Rxjs
import { Observable } from 'rxjs';
import { getMessages } from './core/redux/form.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  model: Object;
  messages: Observable<Object>;

  constructor(
    private _helper: HelperService, 
    private store: Store<AppStateEXT>, 
    private _cd: ChangeDetectorRef, 
    private _router: Router) {
      this.store.dispatch(getMessages());
  }

  ngOnInit() {
    this._helper.getMessages().subscribe((data) => {
      this.messages = JSON.parse(data);
    });

    
  }

  ngDoCheck() {
    this._cd.markForCheck();
  }
}