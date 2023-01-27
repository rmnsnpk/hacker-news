import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicsService } from 'src/app/core/services/topics.service';
import { expectedTopic } from 'test/mocks/expected-topic.mock';
import { topicServiceMock } from 'test/mocks/topic-service.mock';

import { TopicComponent } from './topic.component';

describe('TopicComponent', () => {
  let component: TopicComponent;
  let fixture: ComponentFixture<TopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicComponent],
      providers: [
        {
          provide: TopicsService,
          useValue: topicServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get topic from service by id', () => {
    component.topicId = 123;
    expect(component.topic).toEqual(expectedTopic);
  });
});
