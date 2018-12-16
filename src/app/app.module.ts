import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./core/redux/user.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { formReducer } from './core/redux/user.reducer';

import { MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule, MatSelectModule, MatStepperModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TextFieldComponent } from './core/components/form/text-field/text-field.component';
import { PasswordFieldComponent } from './core/components/form/password-field/password-field.component';

import { HelperService } from './core/services/helper.service';

// Outer modules imports


import { environment } from '../environments/environment';

import { HttpClientModule } from "@angular/common/http";
import { EmailFieldComponent } from './core/components/form/email-field/email-field.component';
import { CheckboxFieldComponent } from './core/components/form/checkbox-field/checkbox-field.component';
import { ConnectFormDirective } from './core/directives/connect-form.directive';
import { ListComponent } from './core/components/list/list.component';
import { SelectFieldComponent } from './core/components/form/select-field/select-field.component';
import { StepperComponent } from './core/components/stepper/stepper.component';

import { DevelopmentModule } from "./extensions/development/development.module";


@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    PasswordFieldComponent,
    EmailFieldComponent,
    CheckboxFieldComponent,
    ConnectFormDirective,
    ListComponent,
    SelectFieldComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DevelopmentModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatStepperModule,
    HttpClientModule,
    StoreModule.forRoot({formGroup: formReducer}),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Redux Store - AppModule',
    })

  ],
  exports: [],
  providers: [HelperService, FormGroupDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
