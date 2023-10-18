import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home.component';
import { Store, StoreModule } from '@ngrx/store';
import { loadBookmark } from 'src/store/actions/movie.action';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
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
      declarations: [HomeComponent],
      imports: [StoreModule.forRoot({})],
      providers: [provideMockStore({ initialState })],
      schemas: [NO_ERRORS_SCHEMA],
    });

    store = TestBed.inject(Store) as MockStore;
    store.setState(initialState);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadBookmark action when toggleBookmark is called', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    const title = 'Sample movie Title';
    component.toggleBookmark(title);
    expect(dispatchSpy).toHaveBeenCalledWith(loadBookmark({ title }));
  });

  it('should display recommended movies', () => {
    fixture.detectChanges();
    const movieElements =
      fixture.nativeElement.querySelectorAll('.movies-Container');
    expect(movieElements).toBeDefined();
  });
  it('should display trending movies', () => {
    fixture.detectChanges();
    const movieElements =
      fixture.nativeElement.querySelectorAll('.trending-container');
    expect(movieElements).toBeDefined();
  });
});
