import { Component, OnInit, OnChanges, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormControlName, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'custom-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestedFormComponent implements OnInit, OnChanges {
  @Input() messages: Object;
  @Input() formGroup: FormGroup;

  forms: Object = {
    formGroupNested: 'formGroupNested',
    formGroups: ['formGroup1', 'formGroup2']
  }
  
  constructor(private _cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this._cd.markForCheck();
  }

}
