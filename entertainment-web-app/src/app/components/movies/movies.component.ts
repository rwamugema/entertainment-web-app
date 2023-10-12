import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MoviesState } from 'src/store/reducers/movie.reducer';
import { Movies } from 'src/store/actions/movie.action';
export interface appState {
  Movies: MoviesState;
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
}
