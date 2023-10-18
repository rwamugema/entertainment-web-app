import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movies } from 'src/store/actions/movie.action';
import { appState } from '../movies/movies.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {

  movies$: Observable<Movies[]> = this.store.select(state => state.Movies.movies)
  constructor( private store: Store<appState>) {}
  @Input() movie: Movies = {
    title: '',
    thumbnail: {
      trending: {
        small: '',
        large: '',
      },
      regular: {
        small: '',
        medium: '',
        large: '',
      },
    },
    year: 0,
    category: '',
    rating: '',
    isBookmarked: false,
    isTrending: false,
  };

  @Output() bookmarkChanged = new EventEmitter<string>();

  toggleBookmark(title: string) {
    this.bookmarkChanged.emit(title);
  }
}
