import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiceComponent } from './mice.component';
import { MiceRoutingModule } from './mice-routing.module';

@NgModule({
  declarations: [
    MiceComponent
  ],
  imports: [
    CommonModule,
    MiceRoutingModule
  ]
})
export class MiceModule { }
