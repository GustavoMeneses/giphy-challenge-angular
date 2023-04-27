import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  baseUrl = 'http://localhost:3000';

  constructor(
      private http: HttpClient
  ) {
  }

  getHistory(): Observable<History[]> {
    return this.http
        .get<History[]>(this.baseUrl+'/history/all');
  }

  saveHistory(key: string): Observable<History> {
    return this.http
      .post<History>(this.baseUrl+'/history', { key });
  }

  clearHistory(): Observable<any> {
    return this.http
      .delete(this.baseUrl+'/history');
  }
}

export interface History {
  id?: number;
  key: string;
}
