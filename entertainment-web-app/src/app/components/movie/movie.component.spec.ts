import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MovieComponent } from './movie.component';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let store: MockStore;

  const initialState = {
    Movies: {
      movies: [],
      loading: false,
      error: '',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieComponent],
      imports: [StoreModule.forRoot({})],
      providers: [provideMockStore({ initialState })],
      schemas: [NO_ERRORS_SCHEMA],
    });

    store = TestBed.inject(Store) as MockStore;
    store.setState(initialState);
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display TV Series movies', () => {
    const tvSeriesMovies = [
      { title: 'Series 1', category: 'TV Series' },
      { title: 'Series 2', category: 'TV Series' },
    ];
    store.setState({
      Movies: { movies: tvSeriesMovies, loading: false, error: '' },
    });
    fixture.detectChanges();
    const movieElements =
      fixture.nativeElement.querySelectorAll('.movies-Container');
    expect(movieElements).toBeDefined();
  });
});
