import { Injectable } from '@angular/core';
import { MovieService } from './movies.service';
import { Movies, loadMovies, loadMoviesError, loadMoviesSuccess } from '../actions/movie.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {mergeMap, map, of, catchError} from 'rxjs'

@Injectable()
export class movieEffect {
    loadMovies$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadMovies),
      mergeMap(() =>
        this.movieService.getMovies().pipe(
          map((movies) => loadMoviesSuccess({ movies })),
          catchError((error) => of(loadMoviesError({ error: error }))),
        ),
      ),
    ),
  );
  constructor(
    private action$: Actions,
    private movieService: MovieService,
  ) {}

  ngOnInit() {
    console.log(this.loadMovies$);
    
  }
}


