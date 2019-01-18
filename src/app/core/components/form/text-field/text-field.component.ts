import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroupName, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'uland-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Input('formGroup') formGroup: FormGroup;
  @Input('formGroupName') formGroupName: FormGroupName;
  @Input('controlName') controlName: string;
  @Input('label') label: string;
  // @Input('value') value: string;
  // @Input('dataStorage') dataStorage: string;
  @Input('placeholder') placeholder: string;
  @Input('id') id: string;

  @Input('isReadOnly') isReadOnly: boolean;
  constructor() {

  }

  ngOnInit() {
    console.log(this.formGroup, this.controlName);
  }

  ngOnChanges () { }

}
