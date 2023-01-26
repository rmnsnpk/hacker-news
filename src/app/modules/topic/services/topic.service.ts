import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_OPTIONS } from 'src/app/shared/consts/api-options.const';
import { environment } from 'src/environments/environment';
import { Topic } from '../models/topic.model';

@Injectable()
export class TopicService {
  private endPoints = {
    topic: 'item/',
  };
  constructor(private http: HttpClient) {}

  public getTopicById(id: number): Observable<Topic> {
    return this.http.get<Topic>(
      environment.api + this.endPoints.topic + id + API_OPTIONS
    );
  }
}
