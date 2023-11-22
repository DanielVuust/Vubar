import { Cocktail } from "./cocktail";

export class CocktailsSection {
    constructor(name: string, description: string, cocktails: Cocktail[]) {
        this.name = name;
        this.description = description;
        this.cocktails = cocktails;
    }
    name: string;
    description: string;
    cocktails: Cocktail[];
}
