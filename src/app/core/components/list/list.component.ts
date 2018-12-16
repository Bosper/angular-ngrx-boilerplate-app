import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSelectionListChange, MatListOption } from "@angular/material";

import { User, AppState, UPDATE_USER } from "../../models/models";

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
  constructor(private cd: ChangeDetectorRef, private ef: ElementRef, private store: Store<AppState>) { }

  ngOnInit() {
    
  }

  onSelection(e: MatSelectionListChange, v: MatListOption){
    console.log(e.option.selected, v[0].value);
  }

  clickItem(item:User) {
    console.log(item)
  }

  ngOnChanges() {
    this.cd.markForCheck();
  }

}
