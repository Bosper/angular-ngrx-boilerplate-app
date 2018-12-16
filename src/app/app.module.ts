import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./core/redux/user.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { formReducer } from './core/redux/user.reducer';



import { AppComponent } from './app.component';

import { ControlsModule } from "./core/modules/controls/controls.module";
import { MaterialModule } from "./core/modules/material/material.module";


import { HelperService } from './core/services/helper.service';

// Outer modules imports
import { environment } from '../environments/environment';

import { HttpClientModule } from "@angular/common/http";

import { DevelopmentModule } from "./extensions/development/development.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DevelopmentModule,
      ControlsModule,
      MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({formGroup: formReducer}),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Redux Store',
    })

  ],
  exports: [],
  providers: [HelperService, FormGroupDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
