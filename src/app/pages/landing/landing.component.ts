import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ButtonModule, AvatarModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
