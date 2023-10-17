import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MoviesState } from 'src/store/reducers/movie.reducer';
import { appState } from '../movies/movies.component';
import { loadBookmark } from 'src/store/actions/movie.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
movies$:Observable<MoviesState> = this.store.select(state => state.Movies)

constructor(private store: Store<appState>){}

toggleBookmark(title: string){
  this.store.dispatch(loadBookmark({title}))
}
}
