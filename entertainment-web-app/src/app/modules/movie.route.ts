import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { MoviesComponent } from '../components/movies/movies.component';
import { TvSeriesComponent } from '../components/tv-series/tv-series.component';
import { BookmarkedSeriesComponent } from '../components/bookmarked-series/bookmarked-series.component';
import { SearchPageComponent } from '../components/search-page/search-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tv-series', component: TvSeriesComponent },
  { path: 'bookmarked', component: BookmarkedSeriesComponent },
  { path: ':title', component: SearchPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoute {}
