import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from '../movies/movies.component';
import { Observable } from 'rxjs';
import { Movies } from 'src/store/actions/movie.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  isFocused: boolean = true;
  movies$: Observable<Movies[]> = this.store.select(
    (state) => state.Movies.movies,
  );
  movies: Movies[] = [];
  searchItems: string = '';
  items: Movies[] = this.movies;
  constructor(private store: Store<appState>) {}

  ngOnInit() {
    this.movies$.subscribe((data) => {
      this.movies = data;
    });
  }
  onInputFocus() {
    this.isFocused = true;
  }
  onInputBru() {
    this.isFocused = !this.isFocused;
  }
  onSearch() {
    this.isFocused = true;
    this.items = this.movies.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .includes(this.searchItems.toLocaleLowerCase()),
    );
    setTimeout(() => {
      this.isFocused = false;
    }, 3000);
  }
}
