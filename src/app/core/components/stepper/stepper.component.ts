import {Component, OnInit, Input, ElementRef} from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl, Validators} from '@angular/forms';
import { CdkStep } from '@angular/cdk/stepper';

@Component({
  selector: 'cms-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() formGroup2: FormGroup;
  @Input() messages: Object;
  
  isLinear: boolean;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  steps: AbstractControl[] = [];

  componentId: string;

  constructor(private _formBuilder: FormBuilder, _er: ElementRef) {
    this.isLinear = true;
    this.componentId = 'REGISTER_FORM_COMPONENT';
    
    //ToDo Components
  }

  ngOnInit() {
    // this.steps = Object.values(this.formGroup.controls)
    this.steps.push(this.formGroup, this.formGroup2)
    console.log('StepperComponent: ', this.formGroup, this.steps, this.messages, this.componentId)
  }

}
