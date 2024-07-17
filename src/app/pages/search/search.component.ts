import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuComponent } from "../../components/menu/menu.component";
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [TieredMenuModule, ButtonModule, SidebarModule, MenuComponent, TagModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  items: MenuItem[] | undefined;
  sidebarVisible: boolean = false;

    
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
