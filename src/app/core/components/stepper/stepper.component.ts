import {Component, OnInit, OnChanges, DoCheck, Input, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, SimpleChanges} from '@angular/core';
import {FormGroup, AbstractControl, Validators} from '@angular/forms';

import { Observable } from 'rxjs'

@Component({
  selector: 'cms-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent implements OnInit, OnChanges, DoCheck {
  @Input() formGroup: FormGroup;
  @Input() formGroup2: FormGroup;
  @Input() $messages: Observable<Object>;
  @Input() steps: AbstractControl[];
  
  isLinear: boolean;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(_er: ElementRef, private _cd: ChangeDetectorRef) {
    this.isLinear = true;
  }

  ngOnInit() { }

  ngDoCheck() {
    this._cd.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges) {
    (changes.$messages) ? console.log('stepper_component_messages_change:', this.$messages) : null;
  }

}
