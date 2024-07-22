import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL = 'http://localhost:3000';
  // private apiURL = '"https://mana-vault-api.vercel.app";'

  constructor() { }


}
