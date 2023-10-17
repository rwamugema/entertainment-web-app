import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movies } from 'src/store/actions/movie.action';
import { appState } from './components/movies/movies.component';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movies[] = [];
  movies$: Observable<Movies[]> = this.store.select(
    (state) => state.Movies.movies,
  );
  private moviesSubject = new BehaviorSubject<Movies[]>(this.movies);
  constructor(private store: Store<appState>) {
    this.movies$.subscribe((data) => {
      this.movies = data;
    });
  }

  getBookMarked() {
    return this.moviesSubject.asObservable();
  }

  toggleBookmark(title: string) {
    const movieIndex = this.movies.findIndex((item) => item.title === title);

    if (movieIndex !== -1) {
      const bookmark = { ...this.movies[movieIndex] };

      bookmark.isBookmarked = !bookmark.isBookmarked;
const updatedMovies = [...this.movies]
      updatedMovies[movieIndex] = bookmark;

      this.moviesSubject.next(updatedMovies);
      console.log(updatedMovies[movieIndex]);
      
    }
  }
}
