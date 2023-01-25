import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestTopicsService } from './services/latest-topics.service';
import { LatestPageComponent } from './pages/latest-page/latest-page.component';
import { LatestRoutingModule } from './latest.routing.module';
import { TopicModule } from '../topic/topic.module';

@NgModule({
  declarations: [LatestPageComponent],
  imports: [CommonModule, LatestRoutingModule, TopicModule],
  providers: [LatestTopicsService],
})
export class LatestModule {}
