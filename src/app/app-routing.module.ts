import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'latest',
    title: 'Latest',
    loadChildren: () =>
      import('./modules/latest/latest.module').then(
        (module) => module.LatestModule
      ),
  },
  { path: '', redirectTo: '/latest', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
