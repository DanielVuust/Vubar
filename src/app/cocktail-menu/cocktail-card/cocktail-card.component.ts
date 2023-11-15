import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/models/cocktails/cocktail';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.css']
})
export class CocktailCardComponent {
  @Input() cocktail: Cocktail | undefined;
  /**
   *
   */
  constructor() {
    
  }
}
