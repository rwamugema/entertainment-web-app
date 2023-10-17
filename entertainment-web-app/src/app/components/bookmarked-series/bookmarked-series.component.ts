import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MoviesState } from 'src/store/reducers/movie.reducer';
import { appState } from '../movies/movies.component';
import { Movies, loadBookmark } from 'src/store/actions/movie.action';

@Component({
  selector: 'app-bookmarked-series',
  templateUrl: './bookmarked-series.component.html',
  styleUrls: ['./bookmarked-series.component.css'],
})
export class BookmarkedSeriesComponent {
  toggleBookmark(title: string) {
    this.store.dispatch(loadBookmark({ title }));
  }
  movies$: Observable<MoviesState> = this.store.select((state) => state.BookMarked);

  constructor(private store: Store<appState>) {}
}
