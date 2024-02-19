import { Component } from '@angular/core';
import { Cocktail } from '../models/cocktails/cocktail';
import { CocktailsSection } from '../models/cocktails/cocktails-section';

@Component({
  selector: 'app•cocktail-menu',
  templateUrl: './cocktail-menu.component.html',
  styleUrls: ['./cocktail-menu.component.css']
})
export class CocktailMenuComponent {

  cocktailsSections: CocktailsSection[] = [
    new CocktailsSection("", "", [ 
      new Cocktail("Whiskey Sour", "Bourbon • Angostura Bitters • Citronsaft • Sukkersirup • Aqua Faba", "image0-removebg-preview.png"),
      new Cocktail("Rob Roy", "Scotch Whisky • Sweet Vermouth • Angostura Bitters", "image3-removebg-preview.png"),
      new Cocktail("Old Fashioned", "Bourbon • Angostura Bitters • Sukkersirup", "image0-removebg-preview.png"),
      new Cocktail("Mint Julep", "Bourbon • Angostura Bitters • Mynteblade • Danskvand", "image2-removebg-preview.png"),
      new Cocktail("Sweet Manhattan", "Bourbon • Sweet Vermouth • Angostura Bitters", "image3-removebg-preview.png"),
      new Cocktail("Lynchburg Lemonade", "Jack Daniel’s • Triple Sec • Citronsaft • Sukkersirup • Lemonade", "image4-removebg-preview.png"),
      new Cocktail("Boulevardier", "Bourbon/Rye Whisky • Campari • Sweet Vermouth", "image0-removebg-preview.png"),
      new Cocktail("Godfather", "Scotch Whisky • Amaretto", "image0-removebg-preview.png"),
      new Cocktail("Sazerac", "Rye Whisky/Cognac • Absint • Peychaud’s Bitters • Sukkersirup", "image0-removebg-preview.png"),
    ]),
    new CocktailsSection("", "", [
      new Cocktail("Cosmopolitan", "Citron Vodka • Triple Sec • Lime Juice • Tranebærjuice", "image3-removebg-preview.png"),
      new Cocktail("Moscow Mule", "Vodka • Lime Juice • Ingefærøl", "image5-removebg-preview.png"),
      new Cocktail("Pornstar Martini", "Vodka • Passionsfrugt Likør • Passionsfrugt Puré • Lime Juice • Vanilje Sirup", "image3-removebg-preview.png"),
      new Cocktail("Sex On The Beach", "Vodka • Fersken Likør • Appelsinjuice • Tranebærjuice", "image4-removebg-preview.png"),
      new Cocktail("Espresso Martini", "Vodka • Kaffe Likør • Espresso • Sukkersirup", "image3-removebg-preview.png"),
      new Cocktail("White Russian", "Vodka • Kaffelikør • Mælk", "image0-removebg-preview.png"),
      new Cocktail("Screaming Orgasm", "Vodka • Amaretto • Baileys • Kaffelikør • Mælk", "image0-removebg-preview.png"),
      new Cocktail("Black Russian", "Vodka • Kaffelikør", "image0-removebg-preview.png"),
      new Cocktail("French Martini", "Vodka • Chambord • Ananas Juice ", "image3-removebg-preview.png"),
    ]),
    new CocktailsSection("", "", [
      new Cocktail("Tom Collins", "Gin • Citronsaft • Sukkersirup • Danskvand", "image4-removebg-preview.png"),
      // new Cocktail("Singapore Sling", "Gin • Triple Sec • Cherry Brandy • Benediktiner Likør • Angostura Bitters • Lime Juice • Grenadine • Ananasjuice ", "image4-removebg-preview.png"),
      new Cocktail("Bramble", "Gin • Créme De Mure • Citronsaft • Sukkersirup", "image0-removebg-preview.png"),
      new Cocktail("Negroni", "Gin • Campari • Sweet Vermouth", "image0-removebg-preview.png"),
      new Cocktail("White Lady", "Gin • Triple Sec • Citron Juice • Sukkersirup", "image3-removebg-preview.png"),
      new Cocktail("Clover Club", "Gin • Hindbær Puré • Citronsaft • Aqua Faba", "image3-removebg-preview.png"),
      new Cocktail("Gin Basil Smash", "Gin • Citronsaft • Sukkersirup • Basilikumblade", "image0-removebg-preview.png"),
      new Cocktail("Southside", "Gin • Lime Juice • Sukkersirup • Mynteblade ", "image3-removebg-preview.png"),
      new Cocktail("French 75", "Gin • Citronsaft • Sukkersirup • Champagne", "image1-removebg-preview.png"),
    ]),
    new CocktailsSection("", "", [
      new Cocktail("Aperol Spritz", "Aperol • Prosecco • Danskvand", "image1-removebg-preview.png"), //HERE
      new Cocktail("Amaretto Sour", "Amaretto • Angostura Bitters • Citronsaft • Sukkersirup • Aqua Faba", "image0-removebg-preview.png"),
      new Cocktail("Sidecar", "Cognac • Triple Sec • Citronsaft • Sukkersirup", "image3-removebg-preview.png"),
      new Cocktail("Bellini", "Prosecco • Ferskenlikør • Fersken Puré", "image1-removebg-preview.png"),
      new Cocktail("Mimosa", "Champagne • Appelsinjuice", "image1-removebg-preview.png"),
      new Cocktail("Kir royal", "Champagne • Créme De Cassis", "image1-removebg-preview.png"),
      new Cocktail("Americano", "Campari • Sweet Vermouth • Danskvand", "image0-removebg-preview.png"),
      new Cocktail("Grasshopper", "Créme De Menthe • Hvid Chokolade Likør • Mælk", "image3-removebg-preview.png"),
      new Cocktail("Brandy Alexander", "Brandy • Chokoladelikør • Mælk", "image3-removebg-preview.png"),
    ]),
    new CocktailsSection("", "", [
      new Cocktail("Margarita", "Tequila • Triple Sec • Lime Juice • Sukkersirup", "image3-removebg-preview.png"),
      new Cocktail("Mai Tai", "Mørk Rom • Triple Sec • Overproof Rom • Lime Juice • Orgeat Sirup", "image0-removebg-preview.png"),
      new Cocktail("El Diablo", "Tequila • Créme De Cassis • Lime Juice • Ginger Ale", "image4-removebg-preview.png"),
      new Cocktail("Daiquiri", "Lys Rom • Lime Juice • Sukkersirup", "image3-removebg-preview.png"),
      new Cocktail("Paloma", "Tequila • Pink Grapefrugt Juice • Lime Juice • Sukkersirup • Danskvand", "image4-removebg-preview.png"),
      new Cocktail("Caipirinha", "Cachaça • Limebåde • Sukkersirup", "image0-removebg-preview.png"),
      new Cocktail("Mojito", "Lys Rom • Mynte Blade • Limebåde • Sukkersirup • Danskvand", "image4-removebg-preview.png"),
      new Cocktail("Dark & Stormy", "Mørk Rom • Lime Juice • Ginger Beer", "image4-removebg-preview.png"),
    ]),
  ];
}
