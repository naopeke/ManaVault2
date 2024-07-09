import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, AvatarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
