import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-extended-form',
  templateUrl: './extended-form.component.html',
  styleUrls: ['./extended-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtendedFormComponent implements OnInit, OnChanges {
  @Input() messages: Object;
  @Input() formGroup: FormGroup;

  constructor(private _cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this._cd.markForCheck();
  }

}
