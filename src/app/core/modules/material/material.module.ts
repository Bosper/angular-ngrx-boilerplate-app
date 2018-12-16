import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatInputModule, 
  MatListModule, 
  MatSelectModule, 
  MatStepperModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule, 
    MatListModule, 
    MatSelectModule, 
    MatStepperModule 
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule, 
    MatListModule, 
    MatSelectModule, 
    MatStepperModule
  ]
})
export class MaterialModule { }
