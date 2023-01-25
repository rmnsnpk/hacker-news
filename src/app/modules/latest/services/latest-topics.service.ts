import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_OPTIONS } from 'src/app/shared/consts/api-options.const';
import { environment } from 'src/environments/environment';

@Injectable()
export class LatestTopicsService {
  private endPoints = {
    latest: 'newstories',
  };
  constructor(private http: HttpClient) {}

  public getLatestTopics(): Observable<Number[]> {
    return this.http.get<Number[]>(
      environment.api + this.endPoints.latest + API_OPTIONS
    );
  }
}
