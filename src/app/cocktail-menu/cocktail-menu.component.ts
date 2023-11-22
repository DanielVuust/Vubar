import { Component } from '@angular/core';
import { Cocktail } from '../models/cocktails/cocktail';
import { CocktailsSection } from '../models/cocktails/cocktails-section';

@Component({
  selector: 'app-cocktail-menu',
  templateUrl: './cocktail-menu.component.html',
  styleUrls: ['./cocktail-menu.component.css']
})
export class CocktailMenuComponent {
  // new Cocktail("", "", ),

  cocktailsSections: CocktailsSection[] = [
    new CocktailsSection("", "", [ 
      new Cocktail("Whiskey Sour", "Bourbon • Angostura Bitters • Frisk Citronsaft • Sukkersirup • Aqua Faba", ),
      new Cocktail("Rob Roy", "Scotch Whisky • Sweet Vermouth • Angostura Bitters", ),
      new Cocktail("Old Fashioned", "Bourbon • Angostura Bitters • Sukkersirup", ),
      new Cocktail("Mint Julep", "Bourbon • Angostura Bitters • Mynteblade • Danskvand", ),
      new Cocktail("Sweet Manhattan", "Bourbon • Sweet vermouth • Angostura Bitters" ),
      new Cocktail("Lynchburg Lemonade", "Jack Daniel’s • Triple Sec • Frisk Citronsaft • Sukkersirup • Lemonade", ),
      new Cocktail("Boulevardier", "Bourbon/Rye Whisky • Campari • Sweet Vermouth", ),
      new Cocktail("Godfather", "Scotch Whisky • Amaretto", ),
      new Cocktail("Sazerac", "Rye Whisky/Cognac • Absint • Peychaud’s Bitters • Sukkersirup", ),
    ]),
    new CocktailsSection("", "", [
      new Cocktail("Cosmopolitan", "Citron Vodka • Triple Sec • Frisk Lime juice • Tranebærjuice", ),
      new Cocktail("Moscow Mule", "Vodka • Frisk Lime Juice • ingefærøl", ),
      new Cocktail("Pornstar Martini", "Vodka • Passionsfrugt Likør • Passionsfrugt Puré • Frisk Lime Juice • Vanilje Sirup", ),
      new Cocktail("Sex On The Beach", "Vodka • Fersken Likør • Appelsinjuice • Tranebærjuice", ),
      new Cocktail("Espresso Martini", "Vodka • Kaffe likør • Espresso • Sukkersirup", ),
      new Cocktail("White Russian", "Vodka • Kaffelikør • Mælk", ),
      new Cocktail("Screaming Orgasm", "Vodka • Amaretto • baileys • Kaffelikør • Mælk", ),
      new Cocktail("Black Russian", "Vodka • Kaffelikør", ),
      new Cocktail("French Martini", "Vodka • Chambord • Ananas Juice ", ),
    ]),
    new CocktailsSection("", "", [
      new Cocktail("Tom Collins", "Gin • Frisk Citronsaft • Sukkersirup • Danskvand", ),
      new Cocktail("Singapore Sling", "Gin • Triple Sec • Cherry Brandy • Benediktiner Likør • Angostura Bitters • Frisk Lime Juice • Grenadine • Ananasjuice ", ),
      new Cocktail("Bramble", "Gin • Créme De Mure • Frisk Citronsaft • Sukkersirup", ),
      new Cocktail("Negroni", "Gin • Campari • Sweet vermouth", ),
      new Cocktail("White Lady", "Gin • Triple Sec • Frisk Citron Juice • Sukkersirup", ),
      new Cocktail("Clover Club", "Gin • Hindbær Puré • Frisk Citronsaft • Aqua Faba", ),
      new Cocktail("Gin Basil Smash", "Gin • Frisk Citronsaft • Sukkersirup • Basilikumblade", ),
      new Cocktail("Southside", "Gin • Frisk Lime Juice • Sukkersirup • Mynteblade ", ),
      new Cocktail("French 75", "Gin • Frisk Citronsaft • Sukkersirup • Champagne", ),
    ]),
    new CocktailsSection("", "", [
      new Cocktail("Aperol Spritz", "Aperol • Prosecco • Danskvand", ),
      new Cocktail("Amaretto Sour", "Amaretto • Angostura Bitters • Frisk Citronsaft • Sukkersirup • Aqua Faba", ),
      new Cocktail("Sidecar", "Cognac • Triple Sec • Frisk Citronsaft • Sukkersirup", ),
      new Cocktail("Bellini", "Prosecco • Ferskenlikør • Fersken Puré", ),
      new Cocktail("Mimosa", "Champagne • Appelsinjuice", ),
      new Cocktail("Kir royal", "Champagne - Créme de cassis", ),
      new Cocktail("Americano", "Campari • Sweet Vermouth • Danskvand", ),
      new Cocktail("Grasshopper", "Créme De Menthe - Hvid Chokolade Likør - mælk", ),
      new Cocktail("Brandy Alexander", "Brandy • Chokoladelikør • Mælk", ),
    ]),
    new CocktailsSection("", "", [
      new Cocktail("Margarita", "Tequila - Triple sec - Frisk Lime Juice - Sukkersirup", ),
      new Cocktail("Mai Tai", "Mørk Rom - Triple sec - Overproof Rom - Frisk Lime Juice - Orgeat Sirup", ),
      new Cocktail("El Diablo", "Tequila - Créme De Cassis - Frisk Lime Juice - Ginger Ale", ),
      new Cocktail("Daiquiri", "Lys Rom - Frisk Lime Juice - Sukkersirup", ),
      new Cocktail("Paloma", "Tequila - Pink Grapefrugt Juice - Frisk Lime Juice - Sukkersirup - Danskvand", ),
      new Cocktail("Caipirinha", "Cachaça - Limebåde - Sukkersirup", ),
      new Cocktail("Mojito", "Lys Rom - Mynte Blade - Limebåde - Sukkersirup - Danskvand", ),
      new Cocktail("Dark & Stormy", "Mørk Rom - Frisk Lime Juice - Ginger Beer", ),
    ]),
  ];
  // listOfCocktails: Cocktail[] = [
  //   new Cocktail("Dry Manhattan", "description", ),
  //   new Cocktail("Old Fashioned", "description",),
  //   new Cocktail("Rob Roy", "description", ),
  //   new Cocktail("Rusty Nail", "description",),
  //   new Cocktail("Mint Julep", "description",),
  //   new Cocktail("Sazerac", "description", ),
  //   new Cocktail("Boulevardier", "description",),
  //   new Cocktail("Lynchburg Lemonade", "description",),
  //   new Cocktail("Whiskey Sour", "description", ),
  // ];
}
