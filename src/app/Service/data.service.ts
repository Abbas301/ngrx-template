import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from '../Models/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly url = 'api/movies/';
  constructor(private readonly http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addMovies(movie: Movie): Observable<Movie> {
    // movie.id = null;
    return this.http.post<Movie>(this.url, movie).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
