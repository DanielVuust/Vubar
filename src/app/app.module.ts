import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CocktailMenuComponent } from './cocktail-menu/cocktail-menu.component';
import { CocktailCardComponent } from './cocktail-menu/cocktail-card/cocktail-card.component';
import { OurSolutionsComponent } from './home/our-solutions/our-solutions.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { MostPopularDrinksComponent } from './home/most-popular-drinks/most-popular-drinks.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NavbarComponent,
    HomeComponent,
    OrderComponent,
    CocktailMenuComponent,
    CocktailCardComponent,
    OurSolutionsComponent,
    HomeHeaderComponent,
    MostPopularDrinksComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
