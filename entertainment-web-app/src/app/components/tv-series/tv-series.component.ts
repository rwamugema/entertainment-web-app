import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter } from 'rxjs';
import { MoviesState } from 'src/store/reducers/movie.reducer';
import { appState } from '../movies/movies.component';
import { FadeIn } from 'src/app/animations/animation';
import { loadBookmark } from 'src/store/actions/movie.action';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css'],
  animations: [FadeIn],
})
export class TvSeriesComponent {
  series$: Observable<MoviesState> = this.store.select((state) => state.Movies);
  constructor(private store: Store<appState>) {}

  toggleBookmark(title: string) {
    this.store.dispatch(loadBookmark({ title }));
    alert(`${title} added to bookmark`);
  }
}
