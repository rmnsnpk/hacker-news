import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicsService } from 'src/app/core/services/topics.service';
import { latestTopicsServiceMock } from 'test/mocks/latest-topics-service.mock';

import { LatestNewsPageComponent } from './latest-news-page.component';

describe('LatestNewsPageComponent', () => {
  let component: LatestNewsPageComponent;
  let fixture: ComponentFixture<LatestNewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestNewsPageComponent],
      providers: [
        {
          provide: TopicsService,
          useValue: latestTopicsServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LatestNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
