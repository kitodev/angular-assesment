import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats.component';
import { CatsRoutingModule } from './cats-routing.module';

@NgModule({
  declarations: [
   CatsComponent
  ],
  imports: [
    CommonModule,
    CatsRoutingModule
  ]
})
export class CatsModule { }
