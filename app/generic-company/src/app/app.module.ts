import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VideosComponent } from './pages/videos/videos.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LookbookComponent } from './pages/lookbook/lookbook.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { TableCartComponent } from './components/table-cart/table-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideosComponent,
    CatalogComponent,
    ProductCardComponent,
    LookbookComponent,
    ContactComponent,
    CartComponent,
    TableCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
