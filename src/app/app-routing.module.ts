import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING_MAP } from './core/constants/routing-map.constants';

const routes: Routes = [
  {
    path: ROUTING_MAP.Latest,
    title: 'Latest',
    loadChildren: () =>
      import('./modules/latest-news/latest-news.module').then(
        (module) => module.LatestNewsModule
      ),
  },
  { path: '', redirectTo: ROUTING_MAP.Latest, pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
