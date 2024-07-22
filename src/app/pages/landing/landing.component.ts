import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ButtonModule, AvatarModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
