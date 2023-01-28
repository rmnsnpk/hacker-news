import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicsService } from 'src/app/core/services/topics.service';
import { latestTopicsServiceMock } from 'test/mocks/latest-topics-service.mock';

import { LatestPageComponent } from './latest-page.component';

describe('LatestPageComponent', () => {
  let component: LatestPageComponent;
  let fixture: ComponentFixture<LatestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestPageComponent],
      providers: [
        {
          provide: TopicsService,
          useValue: latestTopicsServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LatestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
