import { ComponentFixture, TestBed } from '@angular/core/testing';
import { latestTopicsServiceMock } from 'test/mocks/latest-topics-service.mock';

import { LatestTopicsService } from '../../services/latest-topics.service';

import { LatestPageComponent } from './latest-page.component';

describe('LatestPageComponent', () => {
  let component: LatestPageComponent;
  let fixture: ComponentFixture<LatestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestPageComponent],
      providers: [
        {
          provide: LatestTopicsService,
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
