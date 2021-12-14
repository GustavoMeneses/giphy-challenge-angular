import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(
      private http: HttpClient
  ) {
  }

  getGiphies(query: string, offset: number = 0): Observable<Giphy> {
    return this.http
        .get<Giphy>(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=jOPMdqZ0WoT2whk7HjnLANXBFa5xblms&limit=6&offset=${offset}`);
  }
}

export interface Giphy {
  data: [];
  pagination: {
    count: number;
    offset: number;
    totalCount: number;
  };
}
