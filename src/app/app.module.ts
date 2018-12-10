import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms';
import { appReducer } from './core/redux/ngrx-forms-reducer';

import { formReducer } from './core/redux/user.reducer';

import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TextFieldComponent } from './core/components/form/text-field/text-field.component';
import { PasswordFieldComponent } from './core/components/form/password-field/password-field.component';

import { HelperService } from './core/services/helper.service';

// Outer modules imports

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { HttpClientModule } from "@angular/common/http";
import { EmailFieldComponent } from './core/components/form/email-field/email-field.component';
import { CheckboxFieldComponent } from './core/components/form/checkbox-field/checkbox-field.component';
import { ConnectFormDirective } from './core/directives/connect-form.directive';


@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    PasswordFieldComponent,
    EmailFieldComponent,
    CheckboxFieldComponent,
    ConnectFormDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgrxFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    HttpClientModule,
    StoreModule.forRoot({formGroup: formReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Redux Store - AppModule',
    })

  ],
  providers: [HelperService, FormGroupDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
