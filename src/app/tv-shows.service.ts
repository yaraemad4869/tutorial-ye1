import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  apiKey = '49560ad2a12709cba7c0bd0903b19313';
  language: string = 'en-Us';
  constructor(private http: HttpClient) { }


  getpopularTVShows(pageNumber: number = 1): Observable<any> {
    return this.http.get(
      `
https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=${this.language}&page=${pageNumber}`
    );
  }

  getratedTVShows(pageNumber: number = 1): Observable<any> {
    return this.http.get(
      `
https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=${this.language}&page=${pageNumber}`
    );
  }

  getTVShowById(showID: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${showID}?api_key=${this.apiKey}&language=${this.language}`
    );
  }

  searchpopularTVShows(showName: string, pageNumber: number = 1): Observable<any> {
    if (showName == '') {
      return this.getpopularTVShows();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&query=${showName}&page=${pageNumber}`
      );
    }
  }

  searchratedTVShows(showName: string, pageNumber: number = 1): Observable<any> {
    if (showName == '') {
      return this.getratedTVShows();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&query=${showName}&page=${pageNumber}`
      );
    }
  }
  changeLanguage() {
    this.language = this.language == 'en-Us' ? 'ar-SA' : 'en-Us';

    return this.language;
  }
}
