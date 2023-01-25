import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponent } from './components/topic/topic.component';
import { PointsPipe } from './pipes/points.pipe';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [TopicComponent, PointsPipe, TimePipe],
  imports: [CommonModule],
  exports: [TopicComponent],
})
export class TopicModule {}
