import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movies } from '../actions/movie.action';
import  {data} from './data';

@Injectable({ providedIn: 'root' })
export class MovieService {
  getMovies(): Observable<Movies[]> {
    return of(data);
  }
}
