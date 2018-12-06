import { AngularMaterialModule } from './angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      AngularMaterialModule
  ],
  exports: [
      CommonModule,
      AngularMaterialModule
  ]
})
export class SharedModule { }
