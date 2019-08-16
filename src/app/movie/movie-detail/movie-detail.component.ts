import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../models/movie.model';
import { NavbarService } from '../../navbar/services/navbar.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id:number;
  movie: Movie;
  movieSub$: Subscription;

  constructor(
    private movieService: MovieService, 
    private navbarService: NavbarService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieSub$ = this.movieService.movieFromApi(this.id).subscribe(
      movie=> {
        this.movie = movie;
        this.navbarService.title.next(movie.title);
        console.log(this.movie);
      }
    );
  }

  ngOnDestroy(){
    this.movieSub$.unsubscribe();
  }

}
