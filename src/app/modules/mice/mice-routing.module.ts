import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiceComponent } from './mice.component';

const routes: Routes = [
  {
    path: '',
    component: MiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiceRoutingModule {}
