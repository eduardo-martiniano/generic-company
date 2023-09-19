import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VideosComponent } from './pages/videos/videos.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LookbookComponent } from './pages/lookbook/lookbook.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideosComponent,
    CatalogComponent,
    ProductCardComponent,
    LookbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
