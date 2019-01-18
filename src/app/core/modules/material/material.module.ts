import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatInputModule, 
  MatRadioModule,
  MatListModule, 
  MatSelectModule, 
  MatStepperModule,
  MatCardModule,
  MatDatepickerModule,
  MAT_DATE_LOCALE
} from '@angular/material';

import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule, 
    MatRadioModule,
    MatListModule, 
    MatSelectModule, 
    MatStepperModule,
    MatCardModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule, 
    MatRadioModule,
    MatListModule, 
    MatSelectModule, 
    MatStepperModule,
    MatCardModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-gb'} ]
})
export class MaterialModule { }
