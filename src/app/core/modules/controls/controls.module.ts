import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextFieldComponent } from '../../../core/components/form/text-field/text-field.component';
import { PasswordFieldComponent } from '../../../core/components/form/password-field/password-field.component';
import { EmailFieldComponent } from '../../../core/components/form/email-field/email-field.component';
import { CheckboxFieldComponent } from '../../../core/components/form/checkbox-field/checkbox-field.component';
import { SelectFieldComponent } from '../../../core/components/form/select-field/select-field.component';
import { RadioFieldComponent } from '../../../core/components/form/radio-field/radio-field.component';
import { RadioGroupFieldComponent } from '../../../core/components/form/radio-group-field/radio-group-field.component';
import { DatepickerFieldComponent } from '../../../core/components/form/datepicker-field/datepicker-field.component';

import { MaterialModule } from "../material/material.module";

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TextFieldComponent,
    PasswordFieldComponent,
    EmailFieldComponent,
    CheckboxFieldComponent,
    SelectFieldComponent,
    RadioGroupFieldComponent,
    RadioFieldComponent,
    DatepickerFieldComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    TextFieldComponent,
    PasswordFieldComponent,
    EmailFieldComponent,
    CheckboxFieldComponent,
    SelectFieldComponent,
    RadioGroupFieldComponent,
    RadioFieldComponent,
    MaterialModule,
    DatepickerFieldComponent
  ]
})
export class ControlsModule { }
