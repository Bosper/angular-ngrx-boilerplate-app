import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formReducer } from '../form.reducer';
import { FormEffects } from '../form.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { UsersStoreModule } from './user/users-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({reducer: formReducer}),
    EffectsModule.forRoot([FormEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Root Store',
    }),
    UsersStoreModule,
  ],
  exports: [
    StoreModule, 
    EffectsModule, 
    StoreDevtoolsModule
  ]
})
export class RootStoreModule { }
