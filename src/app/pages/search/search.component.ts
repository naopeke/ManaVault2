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

  public cards = signal<Card[]>([
    {
        card_id: 1,
        id: "d99a9a7d-d9ca-4c11-80ab-e39d5943a315",
        user_id: 1,
        image_uris: "https://cards.scryfall.io/small/front/d/9/d99a9a7d-d9ca-4c11-80ab-e39d5943a315.jpg?1632831210",
        name: "Asmoranomardicadaistinaculdacar",
        // printed_name?: string,
        // type_line?: string,
        // oracle_text?: string,
        // printed_text?: string,
        // color_identity?: string[],
        // legalities?: any,
        // prices?: number,
        // set_name?: string,
        // set_type?: string,
        // quantity?: number,
        // deckCard_id?: number
    },
    {
        card_id: 2,
        id: "c7e6915b-2077-45aa-93e7-29b5f14beb51",
        user_id: 1,
        image_uris:  "https://cards.scryfall.io/small/front/c/7/c7e6915b-2077-45aa-93e7-29b5f14beb51.jpg?1572374034",
        name: "Half-Orc, Half-",
        // printed_name?: string,
        // type_line?: string,
        // oracle_text?: string,
        // printed_text?: string,
        // color_identity?: string[],
        // legalities?: any,
        // prices?: number,
        // set_name?: string,
        // set_type?: string,
        // quantity?: number,
        // deckCard_id?: number
    },
    {
        card_id: 3,
        id: "70668650-0fb1-4486-a4e6-ab9a12be5626",
        user_id: 1,
        image_uris:  "https://cards.scryfall.io/small/front/7/0/70668650-0fb1-4486-a4e6-ab9a12be5626.jpg?1682203019",
        name: "Captive Weird",
        // printed_name?: string,
        // type_line?: string,
        // oracle_text?: string,
        // printed_text?: string,
        // color_identity?: string[],
        // legalities?: any,
        // prices?: number,
        // set_name?: string,
        // set_type?: string,
        // quantity?: number,
        // deckCard_id?: number
    }
  ])

  private intervalSubscription = interval(1000)
    .pipe(
      tap(() => {
        this.cards.update((cards) => [
          ...cards,
          {
            card_id: cards.length + 1,
            id: '',
            user_id: 1,
            image_uris: '',
            name: '',
          }
        ]);
      }),
      take(7)
    )
    .subscribe();

    ngOnDestroy():void {
        this.intervalSubscription.unsubscribe();
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
