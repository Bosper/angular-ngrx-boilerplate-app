import { BrowserModule } from '@angular/platform-browser';

import { NgModule} from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ControlsModule } from "./core/modules/controls/controls.module";
import { MaterialModule } from "./core/modules/material/material.module";

import { ApplicationModule } from "./extensions/development/development.module";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./core/redux/user.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HelperService } from './core/services/helper.service';

import { AppComponent } from './app.component';

// Outer modules imports
import { mainReducer } from './core/redux/user.reducer';
import { environment } from '../environments/environment';
import { CmsRoutingModule } from './cms-routing.module';
import { ChangeLangComponent } from './core/components/change-lang/change-lang.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeLangComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ApplicationModule,
      ControlsModule,
      MaterialModule,
    HttpClientModule,
    // StoreModule.forRoot({reducer: mainReducer}),
    // EffectsModule.forRoot([UserEffects]),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: environment.production,
    //   name: 'Redux Store',
    // }),
    CmsRoutingModule
  ],
  exports: [],
  providers: [
    HelperService, 
    FormGroupDirective, 
 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
