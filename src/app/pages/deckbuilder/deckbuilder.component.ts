import { Component, OnInit, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-deckbuilder',
  standalone: true,
  imports: [],
  templateUrl: './deckbuilder.component.html',
  styleUrl: './deckbuilder.component.css'
})
export class DeckbuilderComponent implements OnInit {

  authService = inject(AuthService);
  // user = signal<UserInterface | null | undefined>(undefined);

  user = this.authService.state$;

  ngOnInit(): void {
    this.user = this.authService.state$;
    console.log('userdata in deckbuilder', this.user);
  }
}
