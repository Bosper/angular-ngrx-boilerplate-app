import { Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HelperService } from "./core/services/helper.service";

import { Store, select, createSelector } from '@ngrx/store';
import { AppState} from './core/models/models';

//Rxjs
import { Observable } from 'rxjs';


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

  constructor(private helper: HelperService, private store: Store<AppState>, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.helper.getMessages().subscribe((data) => {
      this.messages = JSON.parse(data);
    });
  }

  ngDoCheck() {
    this.cd.markForCheck();
  }
}