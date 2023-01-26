import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Topic } from '../../models/topic.model';
import { TopicService } from '../../services/topic.service';

@UntilDestroy()
@Component({
  selector: 'hck-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicComponent implements OnInit {
  @Input() set topicId(id: number) {
    this.topicService
      .getTopicById(id)
      .pipe(untilDestroyed(this))
      .subscribe((topic) => {
        this.topic = topic;
        this.cdr.markForCheck();
      });
  }
  @Input() count: number;

  public topic: Topic;

  constructor(
    private topicService: TopicService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {}
}
