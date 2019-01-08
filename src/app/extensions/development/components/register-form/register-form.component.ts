import { Component, OnInit, OnChanges, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Input,} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormControlName, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'cms-development-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() messages: Object;
  @Input() formGroup: FormGroup;
  constructor(private _cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this._cd.markForCheck();
  }

  ngAfterViewInit() {
  }

}
