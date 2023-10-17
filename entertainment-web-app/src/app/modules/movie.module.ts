import { Injectable, NgModule } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { MovieRoute } from './movie.route';
import { CommonModule } from '@angular/common';
import { TvSeriesComponent } from '../components/tv-series/tv-series.component';
import { BookmarkedSeriesComponent } from '../components/bookmarked-series/bookmarked-series.component';
import { StoreModule } from '@ngrx/store';
import { BookmarkedReducer, MovieReducer } from 'src/store/reducers/movie.reducer';
import { MovieComponent } from '../components/movie/movie.component';
import { MoviesComponent } from '../components/movies/movies.component';
import { SearchPageComponent } from '../components/search-page/search-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    TvSeriesComponent,
    MoviesComponent,
    BookmarkedSeriesComponent,
    SearchPageComponent
  ],
  imports: [
    MovieRoute,
    CommonModule,
    StoreModule.forFeature('Movies', MovieReducer),
    StoreModule.forFeature('BookMarked', BookmarkedReducer),
  ],
})
export class MovieModule {}
