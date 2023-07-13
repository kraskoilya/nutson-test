import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { FeedDto } from '../models/feed-dto';

@Injectable()
export class FeedService {
  private url = '/v2/media/feed/recommended';

  constructor(private readonly _http: HttpClient) {}

  public get(params?: Params): Observable<FeedDto> {
    return this._http.get<FeedDto>(this.url, { params });
  }
}
