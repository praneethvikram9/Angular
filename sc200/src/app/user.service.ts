import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = "";

  constructor(private http:HttpClient) { }

  search(username):Observable<any>{
    return this.http.get(this.url,user);
  }
}
