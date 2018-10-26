import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public _url="https://api.themoviedb.org/3/movie/upcoming?api_key=1974ee8d9f7599f8c6d5f5a2bdc2a403";

  constructor(private http:HttpClient) { }

  getMovies():Observable<any>{
    return this.http.get(this._url);
  }
}
