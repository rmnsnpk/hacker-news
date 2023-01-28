import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TopicsService } from 'src/app/core/services/topics.service';

@UntilDestroy()
@Component({
  selector: 'hck-latest-page',
  templateUrl: './latest-page.component.html',
  styleUrls: ['./latest-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LatestPageComponent implements OnInit {
  public topicIds: number[];

  constructor(
    public topicsService: TopicsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.topicsService
      .getLatestTopics()
      .pipe(untilDestroyed(this))
      .subscribe((topicsId) => {
        this.topicIds = topicsId;
        this.cdr.markForCheck();
      });
  }
}
