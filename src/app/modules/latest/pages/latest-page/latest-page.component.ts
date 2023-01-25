import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LatestTopicsService } from '../../services/latest-topics.service';

@UntilDestroy()
@Component({
  selector: 'hck-latest-page',
  templateUrl: './latest-page.component.html',
  styleUrls: ['./latest-page.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LatestPageComponent implements OnInit {
  public topicsId: Number[];

  constructor(private LatestTopicsService: LatestTopicsService) {}

  ngOnInit(): void {
    this.LatestTopicsService.getLatestTopics()
      .pipe(untilDestroyed(this))
      .subscribe((topicsId) => {
        this.topicsId = topicsId;
        console.log(this.topicsId);
      });
  }
}
