import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from "rxjs/operators";
import { movies, Movie } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private ROOT_URL ='http://localhost:3000/movies';

  constructor(private http: HttpClient) { }


  getMoviesFromApi(){
    return this.http.get<Movie[]>(this.ROOT_URL).pipe(this.addDelay);
  }

  movieFromApi(id:number){
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`);
  }
  getMovies(){
    return of(movies);
  }

  movie(id:number){
    return of(
      movies.find(movie => +movie.id === +id)
    );
  }

  addMovie(movie:Movie){
    return this.http.post(this.ROOT_URL,movie);
  }

  addDelay(obs: Observable<any>){
    return obs.pipe(delay(1000))
  }
}
