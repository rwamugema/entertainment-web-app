import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from '../movies/movies.component';
import { Observable } from 'rxjs';
import { Movies } from 'src/store/actions/movie.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  SearchInput: FormGroup;
  isFocused: boolean = true;
  movies$: Observable<Movies[]> = this.store.select(
    (state) => state.Movies.movies,
  );
  movies: Movies[] = [];
  searchItems: string = '';
  items: Movies[] = this.movies;
  constructor(
    private store: Store<appState>,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.SearchInput = this.searchForm();
  }

  ngOnInit() {
    this.movies$.subscribe((data) => {
      this.movies = data;
    });
  }

  searchForm(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required]],
    });
  }
  onInputFocus() {
    this.isFocused = true;
  }
  onInputBru() {
    this.isFocused = !this.isFocused;
  }
  onSearch() {
    this.isFocused = true;
    this.items = this.movies.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .includes(this.searchItems.toLocaleLowerCase()),
    );
    setTimeout(() => {
      this.isFocused = false;
    }, 3000);
  }

  SearchButton() {
    if (this.SearchInput.valid) {
      console.log(this.SearchInput.controls['title'].value);
      
      this.router.navigate([`/${this.SearchInput.controls['title'].value}`])
    }
  }
}
