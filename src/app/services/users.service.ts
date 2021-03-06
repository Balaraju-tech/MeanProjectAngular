import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsersAPI = "http://localhost:8000/users";
  addUserAPI = "http://localhost:8000/users/adduser";
  deleteUserAPI = "http://localhost:8000/users/deleteUser";


  getUsersList(): Observable<user[]>{
    return this.http.get<any>(this.getUsersAPI);
  }

  addUser(user: user){
    const userDetails = user;
    return this.http.post<any>(this.addUserAPI, {userDetails: userDetails});
  }

  deleteUser(userName: String){
      return this.http.post<any>(this.deleteUserAPI, {userName: userName});
  }
}
