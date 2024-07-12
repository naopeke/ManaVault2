import { Injectable,inject, signal, computed, effect } from '@angular/core';
import { Observable, from } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { AuthState } from '../interfaces/auth.interface';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // // public user: UserInterface;
  // currentUserSig = signal<UserInterface | null | undefined>(undefined);

  // http = inject(HttpClient);

  // baseUrl = 'http://localhost:3000';
  // // baseUrl= 'https://mana-vault-api.vercel.app/';

    
  // register(data: any){
  //   return this.http.post(`${this.baseUrl}/register`, data)
  // }
  
  // // register(username: string, email: string, password: string){
  // //   return this.http.post(`${this.baseUrl}/register`, {username, email, password})
  // // }

  //   login(data: any){
  //   return this.http.post(`${this.baseUrl}/login`, data)
  //     .pipe(tap((result)=> {
  //       localStorage.setItem('authUser', JSON.stringify(result));
  //       this.currentUserSig.set(result); // update signal
  //     }));
  // }

  // // login(email: string, password: string){
  // //   return this.http.post(`${this.baseUrl}/login`, {email, password})
  // //     .pipe(tap((result)=> {
  // //       localStorage.setItem('authUser', JSON.stringify(result));
  // //     }));
  // // }

  // logout(){
  //   localStorage.removeItem('authUser');
  //   this.currentUserSig.set(null); // reset signal
  // }

  // isLoggedIn(){
  //   return localStorage.getItem('authUser') !==null;
  // }



  // constructor() { }



  public state$ = signal<AuthState>({
    user:null,
    is_auth: false,
    loading: false
  });

  user = computed(() => this.state$().user);  
  isAuth = computed(() => this.state$().is_auth);
  loading = computed(() => this.state$().loading);

  http = inject(HttpClient);

  baseUrl = 'http://localhost:3000';
  // baseUrl= 'https://mana-vault-api.vercel.app/';

  // for local storage
  private _userKey = 'authUser';

  constructor(){
    const authUser = localStorage.getItem(this._userKey);
    console.log(authUser);

    if (authUser) {
      try {
        const parsedUser = JSON.parse(authUser) as UserInterface;
        this.state$.update(state => ({
          ...state,
          user: parsedUser,
          is_auth: true,
          loading: false
        }));

      } catch (err) {
        console.error('Error parsing authUser from localStorage', err);
      }
    }

    effect(() => {
      const user = this.user();
      if (user !== null){
        localStorage.setItem(this._userKey, JSON.stringify(user));
      } else {
        localStorage.removeItem(this._userKey);
      }
    });
  }


  register(data:any) {
    return this.http.post(`${this.baseUrl}/register`, data)
      .pipe(tap((result: any) => {
        this.state$.update(state => ({
          ...state,
          user: result.user,
          is_auth: true,
          loading: false
        }))
      } ))
  }


  login(data:any) {
    return this.http.post(`${this.baseUrl}/login`, data)
    .pipe(tap((result: any) => {
      this.state$.update(state => ({
        ...state,
        user: result.user,
        is_auth: true,
        loading: false
      }));
    }));
  }

  logout(){
    this.state$.update(state => ({
      ...state,
      user: null,
      is_auth: false,
      loading: false
    }));
  }


  isLoggedIn(){
    return this.state$().is_auth;
  }






}
