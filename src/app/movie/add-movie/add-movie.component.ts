import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavbarService } from '../../navbar/services/navbar.service';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  movieForm = new FormGroup(
    {
      title: new FormControl('',[Validators.required]),
      overview: new FormControl('',[Validators.required]),
      backdrop_path: new FormControl('',[Validators.required]),
      vote_average: new FormControl('',[Validators.required]),
    }
  );

  constructor(private navbarService: NavbarService, private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.navbarService.title.next('Add Movies');

  }

  addMovie(){
    if(this.movieForm.valid){
        this.movieService.addMovie(this.movieForm.value).subscribe(result => {
        this.movieForm.reset();
        this.router.navigate(['/']);
      });
    }
  }

}
