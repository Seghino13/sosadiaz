import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  searchUsers(term: string): Observable<any> {
    return this.http.get(`https://api.github.com/search/users?q=${term}`);
  }
  
}
