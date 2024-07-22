import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from '../card-info/card-info.component';
import { Card } from '../../interfaces/card.interface';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  public card = input.required<Card>();
  public templateCard= input();

  public addCardToBuilder = output<Card>();
  public deleteFromChild = output();
  public onIncrementQuantity = output<number>();
  public onDecrementQuantity = output<number>();

  public childCardClicked = output<Card>();
  // @Output() childCardClicked = new EventEmitter<Card>();


  // public incrementQuantity():void {
  //   this.onIncrementQuantity.emit(this.card().quantity + 1);
  // }

  public cardClick():void {
    this.childCardClicked.emit(this.card());
  }


}
