import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestNewsPageComponent } from './pages/latest-page/latest-news-page.component';
import { LatestNewsRoutingModule } from './latest-news.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TopicsService } from 'src/app/core/services/topics.service';
import { TopicComponent } from './components/topic/topic.component';
import { MultipleOrSinglePipe } from './pipes/multiple-or-single.pipe';
import { ShortUrlPipe } from './pipes/short-url.pipe';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    LatestNewsPageComponent,
    TopicComponent,
    MultipleOrSinglePipe,
    ShortUrlPipe,
    TimePipe,
  ],
  imports: [
    CommonModule,
    LatestNewsRoutingModule,
    HttpClientModule,
    ScrollingModule,
  ],
  providers: [TopicsService],
})
export class LatestNewsModule {}
