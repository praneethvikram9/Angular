import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private movieservice:MovieService,private router: Router) { }

  movielist = [];


  ngOnInit() {
    this.movieservice.getAllMovie().subscribe(data => {
      this.movielist = data;
      console.log(this.movielist);
    })
  }

  delete(movie:Movie){
    this.movieservice.delete(movie.imdbId).subscribe(data =>{
      console.log("deleted it ");
      this.movielist=data;
      this.router.navigate(["/wishlist"]);
    });
  }

  update(id:string){
    this.router.navigate(['/update',id]);
  }

}
