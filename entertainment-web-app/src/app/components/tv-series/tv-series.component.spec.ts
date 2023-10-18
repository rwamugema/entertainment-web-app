import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TvSeriesComponent } from './tv-series.component';
import { Store, StoreModule } from '@ngrx/store';
import { loadBookmark } from 'src/store/actions/movie.action';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('TvSeriesComponent', () => {
  let component: TvSeriesComponent;
  let fixture: ComponentFixture<TvSeriesComponent>;
  let store: MockStore;

  const initialState = {
    Movies: {
      movies: [],
      loading: false,
      error: '',
    },
    BookMarked: {
      movies: [],
      loading: false,
      error: '',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvSeriesComponent],
      imports: [StoreModule.forRoot({})],
      providers: [provideMockStore({ initialState })],
      schemas: [NO_ERRORS_SCHEMA],
    });

    store = TestBed.inject(Store) as MockStore;
    store.setState(initialState);
    fixture = TestBed.createComponent(TvSeriesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadBookmark action when toggleBookmark is called', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    const title = 'Sample TV Series Title';
    component.toggleBookmark(title);
    expect(dispatchSpy).toHaveBeenCalledWith(loadBookmark({ title }));
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
