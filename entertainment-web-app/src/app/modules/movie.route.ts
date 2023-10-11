import { Injectable, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { MoviesComponent } from "../components/movies/movies.component";
import { TvSeriesComponent } from "../components/tv-series/tv-series.component";
import { BookmarkedSeriesComponent } from "../components/bookmarked-series/bookmarked-series.component";
import { BookmarkedMoviesComponent } from "../components/bookmarked-movies/bookmarked-movies.component";

  
const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'movies', component: MoviesComponent},
    {path:'tv-series', component: TvSeriesComponent},
  {path:'movies/bookmarked', component: BookmarkedMoviesComponent},
  {path:'tv-series/bookmarked', component: BookmarkedSeriesComponent},
    
]

  @NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })

  export class MovieRoute {
  }