import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material/app-material.module';
import { RilModelPopupComponent } from './ril-model-popup/ril-model-popup.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  declarations: [
    RilModelPopupComponent
  ],
  exports: [
    RilModelPopupComponent,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    AppMaterialModule,
  ],
  entryComponents: [
    RilModelPopupComponent
  ]
})
export class SharedModule { }
