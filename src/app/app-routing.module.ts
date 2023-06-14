import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/dogs/dogs.module').then((m) => m.DogsModule),
  },
  {
    path: 'cats',
    loadChildren: () => import('./modules/cats/cats.module').then((m) => m.CatsModule),
  },
  {
    path: 'mice',
    loadChildren: () => import('./modules/mice/mice.module').then((m) => m.MiceModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
