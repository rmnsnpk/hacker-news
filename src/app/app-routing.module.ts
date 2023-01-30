import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING_MAP } from './core/constants/routing-map.constants';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';

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
  { path: '**', component: NotFoundPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
