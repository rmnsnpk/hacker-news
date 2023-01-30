import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TopicsService } from 'src/app/core/services/topics.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { TopicComponent } from './components/topic/topic.component';
import { LatestNewsRoutingModule } from './latest-news.routing.module';
import { LatestNewsPageComponent } from './pages/latest-page/latest-news-page.component';

@NgModule({
  declarations: [LatestNewsPageComponent, TopicComponent],
  imports: [
    CommonModule,
    LatestNewsRoutingModule,
    HttpClientModule,
    ScrollingModule,
    SharedModule,
  ],
  providers: [TopicsService],
})
export class LatestNewsModule {}
