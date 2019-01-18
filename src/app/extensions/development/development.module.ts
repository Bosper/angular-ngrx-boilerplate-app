import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DevelopmentComponent } from './development.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

import { CmsCommonModule } from "../../core/modules/common/common.module";

import { FormsModule, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { HelperService } from '../../core/services/helper.service';

import { StepperComponent } from '../../core/components/stepper/stepper.component';
import { ListComponent } from '../../core/components/list/list.component';
import { ExtendedFormComponent } from './components/extended-form/extended-form.component';
import { NestedFormComponent } from './components/nested-form/nested-form.component';

@NgModule({
  declarations: [
    DevelopmentComponent,
    RegisterFormComponent,
    ExtendedFormComponent,
    StepperComponent,
    ListComponent,
    NestedFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    CmsCommonModule
  ],
  exports: [
    DevelopmentComponent,
    CmsCommonModule,
    StepperComponent,
  ],
  providers: [HelperService, FormGroupDirective,],
  entryComponents: [RegisterFormComponent, ExtendedFormComponent, NestedFormComponent]
})
export class ApplicationModule {}
