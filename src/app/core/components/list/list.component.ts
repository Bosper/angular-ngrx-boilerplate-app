import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSelectionListChange, MatSelectionList } from "@angular/material";

import { BaseData, UPDATE_USER_DATA, AppStateEXT, User } from "../../models/models";

import { Store, select } from '@ngrx/store';

@Component({
  selector: 'cms-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  // Dynamic component can have type any[]
  @Input() listItems$: Observable<User[]>;
  constructor(private cd: ChangeDetectorRef, private ef: ElementRef, private store: Store<AppStateEXT>) { }
  
  ngOnInit() {

  }

  onSelection(e: MatSelectionListChange, o: MatSelectionList) {
    console.log('opt: ', e.option.value, e.option.selected);
    this.store.dispatch({type: UPDATE_USER_DATA, payload: {value: e.option.value, option: e.option.selected}});
  }

  clickItem(item: BaseData) {
    // console.log(item);
  }

  ngOnChanges() {
    this.cd.markForCheck();
  }

}
