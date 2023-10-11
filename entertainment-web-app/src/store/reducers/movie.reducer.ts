import { createReducer, on } from '@ngrx/store';
import {
  Movies,
  loadMovies,
  loadMoviesError,
  loadMoviesSuccess,
} from '../actions/movie.action';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface MoviesState {
  movies: Movies[];
  loading: boolean;
  error: string;
}
const initialState: MoviesState = {
  movies:[],
  loading: false,
  error: '',
};
export const MovieReducer = createReducer(
  initialState,
  on(loadMovies, (state) => ({ ...state, loading: true, error: '' })),
  on(loadMoviesSuccess, (state, { movies }) => ({
    ...state,
    loading: true,
    error: '',
    movies,
  })),
  on(loadMoviesError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
