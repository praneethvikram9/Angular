import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = "";
  public url1 = "";

  constructor(private http: HttpClient) { }

  search(username):Observable<any>{
    return this.http.get(this.url+"/"+username);
  }
  register(user:User){
    return this.http.post(this.url1,user);
  }
}
