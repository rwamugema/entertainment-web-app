import { createReducer, on } from '@ngrx/store';
import {
  Movies,
  loadMovies,
  loadMoviesError,
  loadMoviesSuccess,
  loadBookmark,
} from '../actions/movie.action';
import data from '../data/data.json';
import { state } from '@angular/animations';

export interface MoviesState {
  movies: Movies[];
  loading: boolean;
  error: string;
}
const initialState: MoviesState = {
  movies: data,
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

export const BookmarkedReducer = createReducer(
  initialState,
  on(loadBookmark, (state, { title }) => {
    const movieIndex = state.movies.findIndex((item) => item.title === title);
    let updatedMovies: Movies[] = [];
    if (movieIndex !== -1) {
      const bookmark = { ...state.movies[movieIndex] };

      bookmark.isBookmarked = !bookmark.isBookmarked;
      updatedMovies = [...state.movies];
      updatedMovies[movieIndex] = bookmark;
    }

    return { ...state, movies: updatedMovies };
  }),
);
