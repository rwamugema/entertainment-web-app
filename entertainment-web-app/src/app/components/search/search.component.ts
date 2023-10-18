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
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.SearchInput = this.searchForm();
  }

  searchForm(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required]],
    });
  }
  SearchButton() {
    if (this.SearchInput.valid) {
      console.log(this.SearchInput.controls['title'].value);
      
      this.router.navigate([`/posts/${this.SearchInput.controls['title'].value}`])
    }
  }
}
