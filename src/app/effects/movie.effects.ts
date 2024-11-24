import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, exhaustMap, map } from 'rxjs/operators';
import { DataService } from 'src/app/Service/data.service';
import {
  addMovies,
  addMoviesSuccess,
  getMovies,
  getMovieSuccess
} from '../store/actions/movie.actions';

@Injectable()
export class MovieEffect {
  loadMovies$ = createEffect(() =>
    this.action$.pipe(
      ofType(getMovies),
      exhaustMap(() =>
        this.ds.getMovies().pipe(map((movies) => getMovieSuccess(movies)))
      )
    )
  );

  addMovies$ = createEffect(() =>
    this.action$.pipe(
      ofType(addMovies),
      concatMap((movie) =>
        this.ds
          .addMovies(movie)
          .pipe(map((newMovie) => addMoviesSuccess(newMovie)))
      )
    )
  );

  constructor(
    private readonly action$: Actions,
    private readonly ds: DataService
  ) {}
}
