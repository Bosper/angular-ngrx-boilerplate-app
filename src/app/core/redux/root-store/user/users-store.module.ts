import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { usersReducer } from './users.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './users.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('usersFeature', usersReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [UserEffects]
})
export class UsersStoreModule { }
