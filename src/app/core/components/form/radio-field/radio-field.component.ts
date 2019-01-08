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
  @Input() id: string; // The unique ID for the radio button.

  @Input() checked: boolean;
  @Input() color: ThemePalette; // Theme color palette for the component.
  @Input() disableRipple: boolean; // Whether ripples are disabled.
  @Input() disabled: boolean; 
  @Input() labelPosition: 'before' | 'after'; // Whether the label should appear after or before the radio button. Defaults to 'after'
  // @Input() name: string; // Analog to HTML 'name' attribute used to group radios for unique selection.
  @Input()  required: boolean;

  @Output() change: EventEmitter<MatRadioChange>
  // Event emitted when the checked state of this radio button changes. Change events are only emitted when the value changes due to user interaction with the radio button (the same behavior as <input type-"radio">).

  inputId: string // ID of the native input element inside <mat-radio-button>
  radioGroup: MatRadioGroup // The parent radio group. May or may not be present.

  constructor(
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit() { }

  ngOnChanges() {
    this._cd.markForCheck();
  }

}
