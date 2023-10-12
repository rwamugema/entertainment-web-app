import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvSeriesComponent } from './components/tv-series/tv-series.component';
import { BookmarkedMoviesComponent } from './components/bookmarked-movies/bookmarked-movies.component';
import { BookmarkedSeriesComponent } from './components/bookmarked-series/bookmarked-series.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterLinkActive } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MovieModule } from './modules/movie.module';
import { movieEffect } from 'src/store/data/movie.effect';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    MovieModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false }),
  ],
  providers: [ movieEffect],
  bootstrap: [AppComponent]
})
export class AppModule { }
