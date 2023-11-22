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
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
