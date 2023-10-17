import { createAction, props } from '@ngrx/store';

export interface Movies {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export const loadMovies = createAction('[Movie] load movies');
export const loadMoviesSuccess = createAction(
  '[Movie] load movies success',
  props<{ movies: Movies[] }>(),
);
export const loadMoviesError = createAction(
  '[Movie] load movies error',
  props<{ error: string }>(),
);

export const loadBookmark = createAction(
  '[Bookmark] load bookmark',
  props<{ title: string }>(),
);
