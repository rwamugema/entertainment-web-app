import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, switchMap } from 'rxjs';
import { appState } from '../movies/movies.component';
import { Movies } from 'src/store/actions/movie.action';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  title: string | null = '';
  movies$: Observable<Movies[]> = this.store.select(
    (state) => state.Movies.movies,
  );
  MovieLength: number = 0;
  searchedMovies$: Observable<Movies[]> = new Observable<Movies[]>();
  constructor(
    private route: ActivatedRoute,
    private store: Store<appState>,
  ) {}
  ngOnInit() {
    this.searchedMovies$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.title = params.get('title');
        return this.movies$;
      }),
      map((movies) => {
        if (!this.title) {
          return movies;
        }
        const lowerCaseTitle = this.title.toLowerCase();
        const SearchedMovies = movies.filter((item) =>
          item.title.toLowerCase().includes(lowerCaseTitle),
        );
        this.MovieLength = SearchedMovies.length;
        return SearchedMovies;
      }),
    );
  }
}
