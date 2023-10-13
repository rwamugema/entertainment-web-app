import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, switchMap } from 'rxjs';
import { MoviesState } from 'src/store/reducers/movie.reducer';
import { appState } from '../movies/movies.component';
import { Movies } from 'src/store/actions/movie.action';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  id: string | null = '';
  movies$: Observable<Movies[]> = this.store.select(
    (state) => state.Movies.movies,
  );
  searchedMovies$: Observable<Movies[]> = new Observable<Movies[]>();
  constructor(
    private route: ActivatedRoute,
    private store: Store<appState>,
  ) {}
  ngOnInit() {
    this.searchedMovies$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.id = params.get('title');
        return this.movies$;
      }),
      map((movies) => {
        if (!this.id) {
          return movies;
        }
        const lowerCaseId = this.id.toLowerCase();
        return movies.filter((item) =>
          item.title.toLowerCase().includes(lowerCaseId),
        );
      }),
    );
  }
}
