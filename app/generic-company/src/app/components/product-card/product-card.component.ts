import { Component, Input, OnInit } from '@angular/core';
import { ItemCart } from 'src/app/models/item-cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;
  constructor(private carService: CartService) { }

  ngOnInit(): void {
  }

  addInCart() {
    let item: ItemCart = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      imageUrl: this.product.imageUrl,
      count: 1
    }
    this.carService.addItem(item);
  }

}
