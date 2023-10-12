import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter } from 'rxjs';
import { MoviesState } from 'src/store/reducers/movie.reducer';
import { appState } from '../movies/movies.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css']
})
export class TvSeriesComponent {
series$: Observable<MoviesState> = this.store.select(state => state.Movies)
 constructor(private store: Store<appState>){
 
 }


}
