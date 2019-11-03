import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://www.omdbapi.com/';
  apiKey = 'ef421f54';

  constructor(private http: HttpClient) { }

  searchByTitle(title: string, type: SearchType): Observable<any> {
    return this.http.get(
      `${this.url}?apiKey=${this.apiKey}&s=${encodeURI(title)}&type=${type}`
      ).pipe(map(data => data['Search']));
  }

  searchById(id: string): Observable<any> {
    return this.http.get(`${this.url}?apiKey=${this.apiKey}&i=${id}&plot=full`);
  }
}
