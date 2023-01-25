import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestPageComponent } from './pages/latest-page/latest-page.component';

const routes: Routes = [{ path: '', component: LatestPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatestRoutingModule {}
