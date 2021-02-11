import { Injectable } from '@angular/core';
import { Movies } from './movies/movie.datasource';
import { Movie }  from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Movie[] {
    return Movies;
  }
}
