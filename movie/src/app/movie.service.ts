import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public url = "https://api.themoviedb.org/3/movie/upcoming?api_key=a11a51e2627becc9456d9ef4db35443f";

  public url2 ="http://localhost:8099/api/v1/movie/add";
  public url3 ="http://localhost:8099/api/v1/movie/show";
  public url4="http://localhost:8099/api/v1/movie"
  constructor(private http: HttpClient) { }

  getMovies():Observable<any>{
    return this.http.get(this.url);
  }

  addMovie(movie:Movie):Observable<any>{
    return this.http.post(this.url2,movie);

  }
  getAllMovie():Observable<any>{
    return this.http.get(this.url3);
  }
  delete(id):Observable<any>{
    return this.http.delete(this.url4+"/"+id);
  }
  update(id:string,movie:Movie) : Observable<any>{
    return this.http.put(this.url4+"/"+id,movie);
  }

}
