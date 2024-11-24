import { createAction } from '@ngrx/store';
import { Movie } from 'src/app/Models/movie';

export const getMovies = createAction('[Movie] get movie');
export const getMovieSuccess = createAction(
  '[Movie] load movie ',
  (movies: ReadonlyArray<Movie>) => ({ movies })
);
export const addMovies = createAction(
  '[Movie] add movie',
  (movie: Movie) => movie
);
export const addMoviesSuccess = createAction(
  '[Movie] add movie Success',
  (movie: Movie) => ({ movie })
);
