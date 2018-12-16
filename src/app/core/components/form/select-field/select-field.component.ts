import { Component, Input, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'cms-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectFieldComponent implements OnInit {
  disableSelect: FormControl;
  // @Output() change: EventEmitter<any> = new EventEmitter();
  @Input('formGroup') formGroup: FormGroup;
  @Input('controlName') controlName: string;
  @Input('label') label: string;
  // @Input('value') value: string;
  // @Input('dataStorage') dataStorage: string;
  @Input('placeholder') placeholder: string;
  @Input('id') id: string;

  // @Input('isReadOnly') isReadOnly: boolean;
  constructor() {
    this.disableSelect = new FormControl(false);
  }

  ngOnInit() {
    console.log('disableSelect', this.disableSelect);
  }

  ngOnChanges () {
    // this.formGroup.controls[this.controlName].valueChanges.subscribe((data) => console.log(data));
    
  }
}
