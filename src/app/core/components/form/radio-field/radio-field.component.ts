import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ThemePalette, MatRadioGroup, MatRadioChange, MatRadioButton } from '@angular/material';


@Component({
  selector: 'cms-radio-field',
  templateUrl: './radio-field.component.html',
  styleUrls: ['./radio-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioFieldComponent implements OnInit, OnChanges {
  @Input() name: string;
  @Input() opts: any[]

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() label: string;
  @Input() id: string;

  @Input() checked: boolean;
  @Input() color: ThemePalette;
  @Input() disableRipple: boolean;
  @Input() disabled: boolean; 
  @Input() labelPosition: 'before' | 'after';
  @Input()  required: boolean;

  @Output() change: EventEmitter<MatRadioChange>

  inputId: string 
  radioGroup: MatRadioGroup

  constructor(
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit() { }

  ngOnChanges() {
    this._cd.markForCheck();
  }

}
