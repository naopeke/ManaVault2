import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../interfaces/card.interface';

// Curried function for making HTTP requests
const createRequest = (http: HttpClient) => (method: string) => (url: string) => (body?: any) => {
  return http.request(method, url, {body});
}


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  //local server
  public url:string = 'http://localhost:3000';

  //production server
  // private url = '"https://mana-vault-api.vercel.app";'

  private http = inject(HttpClient);
  private request = createRequest(this.http);


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


  // constructor(private http:HttpClient) { }

  public fetchCardData(cardName: string): Observable<Card> {
    let urlName = `${this.url}/cards?cardName=${encodeURIComponent(cardName)}`;
    return this.http.get<Card>(urlName);
  }


  // public getByName(cardName:string):Observable<Card[]>{
  //   let urlName = `${this.url}/cards?cardName=${encodeURIComponent(cardName)}`;
  //   return this.http.get<Card[]>(urlName);
  // }

  // public getByName(url: string, cardName: string){
  //   return this.request('GET')(`${url}/cards?cardName=${encodeURIComponent(cardName)}`)();
  // }

  public getByName(url: string, cardName: string){
    return this.request('GET')(`${url}?cardName=${cardName}`)();
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