import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products: Product[] = [
    {id: 1, name: "Anorak Logos X-HIGH Black/Navy", price: 599. comm00, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Hoodie_Logos_X-High_Black-300x300.jpg"},
    {id: 2, name: "Hoodie Logos X-HIGH Black", price: 499.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Hoodie_Logos_X-High_Black-300x300.jpg"},
    {id: 3, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Crewneck_BRAXL_Black-300x300.jpg"},
    {id: 4, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Shorts_Logos_X-HIGH_Black-300x300.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
    {id: 5, name: "Hoodie Logos X-HIGH Black", price: 199.90, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Tee_Logo_X-HIGH_Purple_Back.jpg"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
