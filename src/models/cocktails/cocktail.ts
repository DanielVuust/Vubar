import { Glass } from './glassType';
export class Cocktail {
    /**
     *
     */
    constructor(name: string, description: string, glass: Glass) {
        this.name = name;
        this.description = description;
        this.glass = glass;
    }
    name: string;
    description: string 
    glass: Glass | undefined;
}