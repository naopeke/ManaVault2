import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuComponent } from "../../components/menu/menu.component";
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { Card } from '../../interfaces/card.interface';
import { CardComponent } from '../../components/card/card.component';
import { interval } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [TieredMenuModule, ButtonModule, SidebarModule, MenuComponent, TagModule, InputIconModule, IconFieldModule, InputTextModule, FormsModule, CardModule, CardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  items: MenuItem[] | undefined;
  sidebarVisible: boolean = false;
  searchPerformed = signal(false);
  errorMessage = signal<string | null>(null);
  resultsCards = signal<Card[]>([]);
  cards = signal<Card[]>([]);


    constructor (private cardsService: CardsService){}


  

    searchCards(cardName: string): void {
      this.searchPerformed.set(true);
      this.errorMessage.set(null); // cada vez busca, refresh

      const formattedCardName = cardName.split(' ').join('+');
  
      this.cardsService.getByName(`${this.cardsService.url}/cards`, formattedCardName).subscribe({
        next: (data:any) => {
          this.resultsCards.set(Array.isArray(data) ? data : [data]); // データが配列か確認
          this.errorMessage.set(null); // refresh errorMessage
          console.log('ErrorMessage', this.errorMessage());
        },
        error: (err) => {
          this.resultsCards.set([]);
          console.log('Error in fetching cards:', err);
          this.errorMessage.set('There are too many cards results') ;
          console.log('Error message', this.errorMessage());
        }
      });
    }
  
    
  ngOnInit() {
      this.items = [
          {
              label: 'Search',
          },
          {
              label: 'Deck Builder',
              icon: 'pi pi-file-edit',
              // items: [
              //     {
              //         label: 'Copy',
              //         icon: 'pi pi-copy'
              //     },
              //     {
              //         label: 'Delete',
              //         icon: 'pi pi-times'
              //     }
              // ]
          },
          {
              label: 'Card Library',
              icon: 'pi pi-search'
          },
          {

          },
          {
              separator: true
          },
          {
              label: 'Log Out',
              icon: 'pi pi-sign-out',
          }
      ]
  }

}
