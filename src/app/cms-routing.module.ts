import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DevelopmentComponent } from "./extensions/development/development.component";

const routes: Routes = [
  {
    path: 'development', 
    component: DevelopmentComponent,
    data: { messages: 'ass' }
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CmsRoutingModule { }
