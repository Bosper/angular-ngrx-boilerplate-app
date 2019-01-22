import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { ControlsModule } from "../controls/controls.module";
import { MaterialModule } from "../material/material.module";

import { ConnectFormDirective } from '../../directives/connect-form.directive';
import { ConnectFormNestDirective } from '../../directives/connect-nest-form.directive';

import { ComponentLoaderDirective } from '../../directives/component-loader.directive';
import { DynamicComponentLoader } from '../../components/dynamic-component-loader/dynamic-component-loader.component';

import { TranslateModule, TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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

@NgModule({
  declarations: [
    ConnectFormDirective,
    ConnectFormNestDirective,
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
        useDefaultLang: false
    }
  ),
  ],
  exports: [
    ConnectFormDirective,
    ConnectFormNestDirective,
    ComponentLoaderDirective,
    DynamicComponentLoader,
    ControlsModule,
    MaterialModule,
    TranslateModule
  ]
})
export class CmsCommonModule { }
