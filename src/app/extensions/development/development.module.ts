import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentComponent } from './development.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

import { FormsModule, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { ControlsModule } from "../../core/modules/controls/controls.module";
import { MaterialModule } from "../../core/modules/material/material.module";

import { ConnectFormDirective } from '../../core/directives/connect-form.directive';
import { ConnectFormSingleDirective } from '../../core/directives/connect-form-single.directive';
import { ComponentLoaderDirective } from '../../core/directives/component-loader.directive';
import { HelperService } from '../../core/services/helper.service';

import { StepperComponent } from '../../core/components/stepper/stepper.component';
import { ListComponent } from '../../core/components/list/list.component';
import { DynamicComponentLoader } from '../../core/components/dynamic-component-loader/dynamic-component-loader.component';
import { ExtendedFormComponent } from './components/extended-form/extended-form.component';
import { NestedFormComponent } from './components/nested-form/nested-form.component';

@NgModule({
  declarations: [
    DevelopmentComponent,
    RegisterFormComponent,
    ExtendedFormComponent,
    ConnectFormDirective,
    ConnectFormSingleDirective,
    ComponentLoaderDirective,
    DynamicComponentLoader,
    StepperComponent,
    ListComponent,
    NestedFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    ControlsModule,
    MaterialModule,
  ],
  exports: [
    DevelopmentComponent,
    ConnectFormDirective,
    ConnectFormSingleDirective,
    ComponentLoaderDirective,
    DynamicComponentLoader,
    StepperComponent
  ],
  providers: [HelperService, FormGroupDirective,],
  entryComponents: [RegisterFormComponent, ExtendedFormComponent, NestedFormComponent]
})
export class DevelopmentModule {}
