import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hck-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
