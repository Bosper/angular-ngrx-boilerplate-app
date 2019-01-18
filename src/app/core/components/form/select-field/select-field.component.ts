import { Component, Input, OnInit, OnChanges, EventEmitter, Output, ViewEncapsulation, SimpleChanges } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { MatSelectChange } from '@angular/material';


@Component({
  selector: 'cms-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectFieldComponent implements OnInit, OnChanges {
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Input('formGroup') formGroup: FormGroup;
  @Input('controlName') controlName: string;
  @Input('label') label: string;
  @Input('placeholder') placeholder: string;
  @Input('id') id: string;
  @Input() disableSelect: boolean;
  @Input() opts: any[];
  @Input() model: Object;
  @Input() suffix: Boolean;

  // @Input('isReadOnly') isReadOnly: boolean;
  constructor() { }

  ngOnInit() { }

  ngOnChanges (changes: SimpleChanges) { }

  selectionChange(changes: MatSelectChange) {
    console.log('change_selection: ', changes);
    this.change.emit(changes);
  }

  openedChange(changes) {
    console.log("opened_change: ", changes);
  }
}
