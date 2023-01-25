import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hck-latest-page',
  templateUrl: './latest-page.component.html',
  styleUrls: ['./latest-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LatestPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
