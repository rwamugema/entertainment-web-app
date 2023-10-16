import { Component, Input } from '@angular/core';
import { Movies } from 'src/store/actions/movie.action';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
AddtoBoolmark(title: string) {
  
console.log(title);

}
  @Input() movie: Movies = {
    title: '',
    thumbnail: {
      trending: {
        small: '',
        large: '',
      },
      regular: {
        small: '',
        medium: '',
        large: '',
      },
    },
    year: 0,
    category: '',
    rating: '',
    isBookmarked: false,
    isTrending: false,
  };
}
