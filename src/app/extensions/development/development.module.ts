import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentComponent } from './development.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    DevelopmentComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DevelopmentComponent
  ]
})
export class DevelopmentModule { }
