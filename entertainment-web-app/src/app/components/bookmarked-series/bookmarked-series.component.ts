import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MoviesState } from 'src/store/reducers/movie.reducer';
import { appState } from '../movies/movies.component';

@Component({
  selector: 'app-bookmarked-series',
  templateUrl: './bookmarked-series.component.html',
  styleUrls: ['./bookmarked-series.component.css']
})
export class BookmarkedSeriesComponent {
  movies$: Observable<MoviesState> = this.store.select(state => state.Movies)

  constructor(private store: Store<appState>){}

}
