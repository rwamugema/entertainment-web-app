import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movies } from '../actions/movie.action';
import  * as data from './data.json';

@Injectable({ providedIn: 'root' })
export class MovieService {
  getMovies(): Observable<Movies[]> {
    return of(data);
  }
}
