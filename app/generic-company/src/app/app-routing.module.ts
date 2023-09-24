import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './pages/videos/videos.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { LookbookComponent } from './pages/lookbook/lookbook.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {
    path: "",
    component: CatalogComponent
  },
  {
    path: "videos",
    component: VideosComponent
  },
  {
    path: "lookbook",
    component: LookbookComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "cart",
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
