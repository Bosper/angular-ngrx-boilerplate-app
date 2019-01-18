import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { ControlsModule } from "../controls/controls.module";
import { MaterialModule } from "../material/material.module";

import { ConnectFormDirective } from '../../directives/connect-form.directive';
import { ConnectFormSingleDirective } from '../../directives/connect-form-single.directive';

import { ComponentLoaderDirective } from '../../directives/component-loader.directive';
import { DynamicComponentLoader } from '../../components/dynamic-component-loader/dynamic-component-loader.component';

import { TranslateModule, TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "../../redux/user.effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Outer modules imports
import { mainReducer } from '../../redux/user.reducer';
import { environment } from '../../../../environments/environment';

export function createTranslateLoader(http: HttpClient) {
  const url: string = 'http://localhost:4800/api/messages/';
  console.log('MOD STORE: ', http);

  return new TranslateHttpLoader(http, url, '');
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
      return '';
  }
}

// export class CustomLoader implements TranslateLoader {
//   url: string = 'http://localhost:4800/api/messages/';
//   constructor(private http: HttpClient, private store: Store<any>) {}

//   public getTranslation(lang): Observable<any> {
//     return this.http.get<string>(this.url + lang).pipe(map(
//       (res: any) => {
//         console.log('module: res: ', res)
//         return res;
//       }
//     ));

//   }
// }

@NgModule({
  declarations: [
    ConnectFormDirective,
    ConnectFormSingleDirective,
    ComponentLoaderDirective,
    DynamicComponentLoader,
  ],
  imports: [
    CommonModule,
    ControlsModule,
    MaterialModule,
    TranslateModule.forRoot(
      {
        missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler},
        useDefaultLang: false,
      //   loader: {
      //     provide: TranslateLoader,
      //     useClass: CustomLoader,
      //     deps: [HttpClient]
      // }
    }
  ),
  StoreModule.forRoot({reducer: mainReducer}),
  EffectsModule.forRoot([UserEffects]),
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
    name: 'Redux Store',
  }),
  ],
  exports: [
    ConnectFormDirective,
    ConnectFormSingleDirective,
    ComponentLoaderDirective,
    DynamicComponentLoader,
    ControlsModule,
    MaterialModule,
    TranslateModule,
    StoreModule,
    EffectsModule,
    StoreDevtoolsModule

  ]
})
export class CmsCommonModule { }
