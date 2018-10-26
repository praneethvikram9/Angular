import { Component, OnInit, Input } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {

  constructor(private router: Router,private movieService:MovieService) { }

  addMovie : Movie;

  ngOnInit() {
  }
  @Input('movielist') movielist;

  addToWishlist(movie){
    this.addMovie = new Movie();
    this.addMovie.imdbId=movie.id;
    this.addMovie.comments=movie.overview;
    this.addMovie.postedUrl=movie.poster_path;
    this.addMovie.movieTitle=movie.title;
    this.addMovie.yearOfRelease=movie.release_date;
    this.addMovie.ratings=movie.vote_average;
    this.movieService.addMovie(this.addMovie).subscribe(data =>{
      console.log("successfully added the movie to wishlist");
      this.router.navigate(["/wishlist"]);
    });
  }

}
