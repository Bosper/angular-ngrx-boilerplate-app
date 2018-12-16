import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentComponent } from './development.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

import { FormsModule, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { ControlsModule } from "../../core/modules/controls/controls.module";
import { MaterialModule } from "../../core/modules/material/material.module";

import { ConnectFormDirective } from '../../core/directives/connect-form.directive';
import { StoreModule } from '@ngrx/store';
import { formReducer } from '../../core/redux/user.reducer';
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "../../core/redux/user.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HelperService } from '../../core/services/helper.service';

import { StepperComponent } from '../../core/components/stepper/stepper.component';
import { ListComponent } from '../../core/components/list/list.component';

@NgModule({
  declarations: [
    DevelopmentComponent,
    RegisterFormComponent,
    ConnectFormDirective,
    StepperComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    ControlsModule,
    MaterialModule,
    StoreModule.forFeature("Development Module",{formGroup: formReducer}),
    EffectsModule.forRoot([UserEffects]),
  ],
  exports: [
    DevelopmentComponent,
    ConnectFormDirective
  ],
  providers: [HelperService, FormGroupDirective]
})
export class DevelopmentModule {}
