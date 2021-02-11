import { Injectable } from '@angular/core';
import { Movies } from './movies/movie.datasource';
import { Movie }  from './movie';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private loggingService: LoggingService) { }

  getMovies(): Observable<Movie[]> {
    this.loggingService.add('MovieService: listing movies');
    return of(Movies);
  }
}
