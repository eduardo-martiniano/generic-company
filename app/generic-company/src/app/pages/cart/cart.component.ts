import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartIsEmpty = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.carChangedReceiver().subscribe(() => {
      this.cartIsEmpty = this.cartService.cartIsEmpty();
    });
  }
}
