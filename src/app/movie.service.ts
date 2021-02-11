import { Injectable } from '@angular/core';
import { Movies } from './movies/movie.datasource';
import { Movie }  from './movie';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Observable<Movie[]> {
    return of(Movies);
  }
}
