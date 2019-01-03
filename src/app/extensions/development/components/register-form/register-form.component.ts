import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Input, ViewContainerRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormControlName, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'cms-development-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements OnInit, AfterViewInit {
  @Input() messages: Object;
  @Input() formGroup: FormGroup;
  constructor(private _cd: ChangeDetectorRef, public _vc: ViewContainerRef) { }

  ngOnInit() {
  }

  ngOnChange() {
    this._cd.markForCheck();
  }

  ngAfterViewInit() {
  }

}
