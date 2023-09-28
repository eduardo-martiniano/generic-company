import { Component, OnInit } from '@angular/core';
import { ItemCart } from 'src/app/models/item-cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-table-cart',
  templateUrl: './table-cart.component.html',
  styleUrls: ['./table-cart.component.css']
})
export class TableCartComponent implements OnInit {

  items: ItemCart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem("cart") ?? "[]");
  }

  removeItem(id: number) {
    this.items = this.items.filter(x => x.id != id);
    this.cartService.removeItem(id);
    this.cartService.carChangedEvent();
  }
}
