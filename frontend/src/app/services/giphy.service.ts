import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
        .get<Giphy>(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${environment.giphyKey}&limit=6&offset=${offset}`);
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
