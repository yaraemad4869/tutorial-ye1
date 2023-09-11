import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey = '49560ad2a12709cba7c0bd0903b19313';
  language: string = 'en-Us';
  constructor(private http: HttpClient) { }


  getplayingMovies(pageNumber: number = 1): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=${this.language}&page=${pageNumber}`
    );
  }

  getpopularMovies(pageNumber: number = 1): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=${this.language}&page=${pageNumber}`
    );
  }

  getratedMovies(pageNumber: number = 1): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=${this.language}&page=${pageNumber}`
    );
  }

  getupcomingMovies(pageNumber: number = 1): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=${this.language}&page=${pageNumber}`
    );
  }

  getMovieById(movieID: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${this.apiKey}&language=${this.language}`
    );
  }

  searchplayingMovies(movieName: string, pageNumber: number = 1): Observable<any> {
    if (movieName == '') {
      return this.getplayingMovies();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${movieName}&page=${pageNumber}`
      );
    }
  }

  searchpopularMovies(movieName: string, pageNumber: number = 1): Observable<any> {
    if (movieName == '') {
      return this.getpopularMovies();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${movieName}&page=${pageNumber}`
      );
    }
  }

  searchratedMovies(movieName: string, pageNumber: number = 1): Observable<any> {
    if (movieName == '') {
      return this.getratedMovies();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${movieName}&page=${pageNumber}`
      );
    }
  }

  searchupcomingMovies(movieName: string, pageNumber: number = 1): Observable<any> {
    if (movieName == '') {
      return this.getupcomingMovies();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${movieName}&page=${pageNumber}`
      );
    }
  }
  changeLanguage() {
    this.language = this.language == 'en-Us' ? 'ar-SA' : 'en-Us';

    return this.language;
  }
}