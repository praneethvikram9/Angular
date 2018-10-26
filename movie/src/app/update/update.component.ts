import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute,private movieService :MovieService,private router :Router) { }
  imdbId:string;
  movie:Movie;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.imdbId=params['imdbId'];
    })
   }
   update(comment:string){
    this.movie=new Movie();
    this.movie.comments=comment;
    this.movieService.update(this.imdbId,this.movie).subscribe(data => {
      console.log("updated ");
      this.router.navigate(['/wishlist']);
    })
     
   }

}
