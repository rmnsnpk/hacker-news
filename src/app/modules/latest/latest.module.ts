import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestPageComponent } from './pages/latest-page/latest-page.component';
import { LatestRoutingModule } from './latest.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TopicsService } from 'src/app/core/services/topics.service';
import { TopicComponent } from './components/topic/topic.component';
import { MultipleOrSinglePipe } from 'src/app/modules/latest/pipes/multiple-or-single.pipe';

import { TimePipe } from 'src/app/modules/latest/pipes/time.pipe';
import { ShortUrlPipe } from 'src/app/modules/latest/pipes/short-url.pipe';

@NgModule({
  declarations: [
    LatestPageComponent,
    TopicComponent,
    MultipleOrSinglePipe,
    ShortUrlPipe,
    TimePipe,
  ],
  imports: [
    CommonModule,
    LatestRoutingModule,
    HttpClientModule,
    ScrollingModule,
  ],
  providers: [TopicsService],
})
export class LatestModule {}
