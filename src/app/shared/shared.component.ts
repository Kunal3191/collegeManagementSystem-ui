import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    AppMaterialModule,
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
