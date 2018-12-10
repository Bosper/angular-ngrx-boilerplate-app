import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.css']
})
export class CheckboxFieldComponent implements OnInit {

  @Output() change: EventEmitter<any> = new EventEmitter();
  @Input('formGroup') formGroup: FormGroup;
  @Input('controlName') controlName: string;
  @Input('label') label: string;
  @Input('id') id: string;
  @Input('checked') checked: boolean;
  
  constructor() { }

  ngOnInit() {
    console.log(this.formGroup, this.controlName);
  }


}