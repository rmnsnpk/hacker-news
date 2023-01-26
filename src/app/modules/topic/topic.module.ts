import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointsPipe } from './pipes/points.pipe';
import { TimePipe } from './pipes/time.pipe';
import { TopicComponent } from './components/topic/topic.component';
import { HttpClientModule } from '@angular/common/http';
import { TopicService } from './services/topic.service';
import { LinkPipe } from './pipes/link.pipe';

@NgModule({
  declarations: [TopicComponent, PointsPipe, TimePipe, LinkPipe],
  imports: [CommonModule, HttpClientModule],
  providers: [TopicService],
  exports: [TopicComponent],
})
export class TopicModule {}
