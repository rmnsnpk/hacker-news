import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Topic } from '../models/topic.model';

@Injectable()
export class TopicsService {
  private endPoints = {
    topic: 'item/',
    latest: 'newstories',
  };
  private apiOptions = '.json?print=pretty';

  constructor(private http: HttpClient) {}

  public getTopicById(id: number): Observable<Topic> {
    return this.http.get<Topic>(
      environment.api + this.endPoints.topic + id + this.apiOptions
    );
  }

  public getLatestTopics(): Observable<number[]> {
    return this.http.get<number[]>(
      environment.api + this.endPoints.latest + this.apiOptions
    );
  }
}
