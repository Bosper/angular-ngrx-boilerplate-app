import { Component, Input, OnInit, DoCheck, EventEmitter, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'cms-datepicker-field',
  templateUrl: './datepicker-field.component.html',
  styleUrls: ['./datepicker-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class DatepickerFieldComponent implements OnInit, DoCheck {
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() label: string;
  @Input() placeholder: string;
  // @Input() serializedDate = new FormControl((new Date()).toISOString());

  constructor(
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log(this.formGroup, this.controlName);
  }

  ngDoCheck() {
    this._cd.markForCheck();
  }

}
