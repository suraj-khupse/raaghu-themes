import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsIconsComponent } from './rds-icons.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RdsIconsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    RdsIconsComponent
  ]
})
export class RdsIconModule { }
