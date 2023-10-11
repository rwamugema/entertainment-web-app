import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadMovies } from 'src/store/actions/movie.action';
import { MovieService } from 'src/store/data/movies.service';
import { MoviesState } from 'src/store/reducers/movie.reducer';
import * as moviedata from '../../../store/data/data';
interface appState {
  movies: MoviesState;
}
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  movies$: Observable<MoviesState> = this.store.select((state) => state.movies);
  constructor(private store: Store<appState>) {}

  ngOnInit() {
    console.log(moviedata);
    this.store.dispatch(loadMovies());
  }
}
