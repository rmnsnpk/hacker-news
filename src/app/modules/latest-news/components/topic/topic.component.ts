import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Topic } from 'src/app/core/models/topic.model';
import { TopicsService } from 'src/app/core/services/topics.service';

@UntilDestroy()
@Component({
  selector: 'hck-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicComponent implements OnInit {
  @Input() topicId: number;
  @Input() set count(counter: number) {
    this.increasedCount = ++counter + '. ';
  }

  public topic: Topic;

  increasedCount: string;

  constructor(
    private topicsService: TopicsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.topicsService
      .getTopicById(this.topicId)
      .pipe(untilDestroyed(this))
      .subscribe((topic) => {
        this.topic = topic;
        this.cdr.detectChanges();
      });
  }
}
