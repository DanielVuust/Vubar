import { Component } from '@angular/core';
import { Cocktail } from 'src/models/cocktails/cocktail';
import { Glass } from 'src/models/cocktails/glassType';

@Component({
  selector: 'app-cocktail-menu',
  templateUrl: './cocktail-menu.component.html',
  styleUrls: ['./cocktail-menu.component.css']
})
export class CocktailMenuComponent {
  listOfCocktails: Cocktail[] = [
    new Cocktail("Dry Manhattan", "description", new Glass("test")),
    new Cocktail("Old Fashioned", "description", new Glass("test")),
    new Cocktail("Rob Roy", "description", new Glass("test")),
    new Cocktail("Rusty Nail", "description", new Glass("test")),
    new Cocktail("Mint Julep", "description", new Glass("test")),
    new Cocktail("Sazerac", "description", new Glass("test")),
    new Cocktail("Boulevardier", "description", new Glass("test")),
    new Cocktail("Lynchburg Lemonade", "description", new Glass("test")),
    new Cocktail("Whiskey Sour", "description", new Glass("test")),
  ];
}
