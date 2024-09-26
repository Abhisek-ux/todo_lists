import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '96fef394';
  private apiUrl = `http://www.omdbapi.com/?apikey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&s=${title}`);
  }
}
