import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormControlName, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'cms-development-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements OnInit {
  @Input() messages: Object;
  @Input() formGroup: FormGroup;
  
  constructor(private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    console.log("FB: ", this.formGroup);
    
  }

  ngOnChange() {
    this._cd.markForCheck();
  }

  private agreementCheck() {
    
  }

}
