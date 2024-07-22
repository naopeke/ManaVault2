import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  //local server
  private url:string = 'http://localhost:3000';

  //production server
  // private url = '"https://mana-vault-api.vercel.app";'


  //初期値
  public card: Card = {
    card_id: 0,
    id: '',
    user_id: 0,
    image_uris: '',
    name: '',
    printed_name: '',
    type_line: '',
    oracle_text: '',
    printed_text: '',
    color_identity: [],
    legalities:'',
    prices: 0,
    set_name: '',
    set_type: '',
    quantity: 0,
    deckCard_id: 0

  }

  constructor(private http:HttpClient) { }

  public fetchCardData(cardName: string): Observable<Card> {
    let urlName = `${this.url}/cards?cardName=${encodeURIComponent(cardName)}`;
    return this.http.get<Card>(urlName);
  }


  public getByName(cardName:string):Observable<Card[]>{
    let urlName = `${this.url}/cards?cardName=${encodeURIComponent(cardName)}`;
    return this.http.get<Card[]>(urlName);
  }

  public addCardsToDeck(cardApiIds: string[], user_id: number, indexDeck: number): Observable<any> {
    let urlAddToDeck = `${this.url}/cards`;
    return this.http.post(urlAddToDeck, { ids: cardApiIds, user_id: user_id, indexDeck: indexDeck });
  }  


  public fetchCardSymbols(): Observable<any> {
    let urlSymbols = `${this.url}/cards/symbols`;
    return this.http.get(urlSymbols);
  }





}