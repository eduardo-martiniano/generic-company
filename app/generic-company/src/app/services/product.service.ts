import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProduct(id: number): Product {
    return {id: 1, name: "Anorak Logos X-HIGH Black/Navy", price: 599.00, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Hoodie_Logos_X-High_Black-300x300.jpg"};
  }
}
