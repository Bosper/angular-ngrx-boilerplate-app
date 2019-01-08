import {Component, OnInit, Input, ElementRef} from '@angular/core';
import {FormGroup, AbstractControl, Validators} from '@angular/forms';

@Component({
  selector: 'cms-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() formGroup2: FormGroup;
  @Input() messages: Object;
  @Input() steps: AbstractControl[];
  
  isLinear: boolean;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(_er: ElementRef) {
    this.isLinear = true;
  }

  ngOnInit() { }

}
