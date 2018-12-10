import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'uland-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.css']
})
export class EmailFieldComponent implements OnInit {
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Input('formGroup') formGroup: FormGroup;
  @Input('controlName') controlName: string;
  @Input('label') label: string;
  // @Input('value') value: string;
  // @Input('dataStorage') dataStorage: string;
  @Input('placeholder') placeholder: string;
  @Input('id') id: string;

  @Input('isReadOnly') isReadOnly: boolean;
  constructor() { }

  ngOnInit() {
    console.log(this.formGroup, this.controlName);
  }

  ngOnChanges () {
    // this.formGroup.controls[this.controlName].valueChanges.subscribe((data) => console.log(data));
    
  }

}