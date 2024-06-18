

import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, AvatarModule, CommonModule, RippleModule, RouterModule, TieredMenuModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

    authService = inject(AuthService);

    navItems: MenuItem[] | undefined;
    toggleButtonItems: MenuItem[] | undefined;

    logOut(){
        this.authService.logout();
    }

    ngOnInit() {
        this.toggleButtonItems = [
            {
                label: 'Edit Profile',
                icon: 'pi pi-file-edit',
                
            },
            
            {
                separator: true
            },
            {
                label: 'Sign Out',
                icon: 'pi pi-sign-out',
                command: () => this.logOut()
        
            }
        ]


//         this.authService.user$.subscribe( user => {
//             if (user){
//                 this.authService.currentUserSig.set({
//                     email: user.email!,
//                     username: user.displayName!,
//                 });
//                 this.navItems = [
//                     {
//                       label: 'Home',
//                       icon: 'pi pi-home',
//                       routerLink: '/',
//                     },
//                     {
//                       label: 'Advanced Search',
//                       icon: 'pi pi-search',
//                       routerLink: 'advanced'
//                   },
//                     {
//                         label: 'Deck Builder',
//                         icon: 'pi pi-star',
//                         items: [
//                             {
//                                 label: 'All',
//                                 icon: 'pi pi-bolt',
//                                 routerLink: 'deckbuilder'
//                             },
//                             {
//                                 label: 'Add',
//                                 icon: 'pi pi-server'
//                             },
//                             {
//                                 label: 'Edit',
//                                 icon: 'pi pi-pencil'
//                             },
//                             {
//                                 label: 'Templates',
//                                 icon: 'pi pi-palette',
//                                 items: [
//                                     {
//                                         label: 'Apollo',
//                                         icon: 'pi pi-palette'
//                                     },
//                                     {
//                                         label: 'Ultima',
//                                         icon: 'pi pi-palette'
//                                     }
//                                 ]
//                             }
//                         ]
//                     },
//                     {
//                         label: 'Contact',
//                         icon: 'pi pi-envelope',
//                         routerLink: 'contact',
//                     },
//                     {
//                         label: 'Sign Out',
//                         icon: 'pi pi-envelope',
//                         routerLink: 'login',
//                     }
//                 ]


//             } else {
//                 this.authService.currentUserSig.set(null);
//                 this.navItems = [
//                     {
//                       label: 'Home',
//                       icon: 'pi pi-home',
//                       routerLink: '/',
//                     },
//                     {
//                       label: 'Advanced Search',
//                       icon: 'pi pi-search',
//                       routerLink: 'advanced'
//                     },
//                     {
//                         label: 'Contact',
//                         icon: 'pi pi-envelope',
//                         routerLink: 'contact',
//                     }
//                 ]
//             }
//             console.log(this.authService.currentUserSig());
//         });

  }
}