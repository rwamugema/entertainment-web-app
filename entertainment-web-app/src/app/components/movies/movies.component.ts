import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movies, loadBookmark } from 'src/store/actions/movie.action';
import { MoviesState } from 'src/store/reducers/movie.reducer';

export interface appState {
  Movies: MoviesState;
  BookMarked: MoviesState
}
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies$: Observable<MoviesState> = this.store.select((state) => state.Movies);
  constructor(private store: Store<appState>) {
  }

  toggleBookmark(title: string) {
    this.store.dispatch(loadBookmark({ title }));
    alert(`${title} added to bookmark`);
  }
}
