import { Component, OnInit } from '@angular/core';
import { ItemCart } from 'src/app/models/item-cart';

@Component({
  selector: 'app-table-cart',
  templateUrl: './table-cart.component.html',
  styleUrls: ['./table-cart.component.css']
})
export class TableCartComponent implements OnInit {

  items: ItemCart[] = [
    {id: 1, name: "CAMISETA CARA", count: 2, price: 199.00, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Hoodie_Logos_X-High_Black-300x300.jpg"},
    {id: 1, name: "CAMISETA CARA", count: 2, price: 199.00, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Hoodie_Logos_X-High_Black-300x300.jpg"},
    {id: 1, name: "CAMISETA CARA", count: 2, price: 199.00, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Hoodie_Logos_X-High_Black-300x300.jpg"},
    {id: 1, name: "CAMISETA CARA", count: 2, price: 199.00, imageUrl: "https://highcompanybr.com/wp-content/uploads/2023/09/Hoodie_Logos_X-High_Black-300x300.jpg"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
