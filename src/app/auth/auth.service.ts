import { Injectable,inject, signal } from '@angular/core';
import { Observable, from } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // public user: UserInterface;
  currentUserSig = signal<UserInterface | null | undefined>(undefined);

  http = inject(HttpClient);

  baseUrl = 'http://localhost:3000';

  register(username: string, email: string, password: string){
    return this.http.post(`${this.baseUrl}/register`, {username, email, password})
  }

  login(email: string, password: string){
    return this.http.post(`${this.baseUrl}/login`, {email, password})
      .pipe(tap((result)=> {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
  }

  logout(){
    localStorage.removeItem('authUser');
  }

  isLoggedIn(){
    return localStorage.getItem('authUser') !==null;
  }



  constructor() { }
}
