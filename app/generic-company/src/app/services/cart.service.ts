import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ItemCart } from '../models/item-cart';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  messageEvent = new BehaviorSubject<any>(undefined);

  constructor() { }

  addItem(item: ItemCart) {
    var items = JSON.parse(localStorage.getItem("cart") ?? "[]") as ItemCart[];
    items.push(item);
    localStorage.setItem("cart", JSON.stringify(items));
  }

  removeItem(id: number) {
    var items = JSON.parse(localStorage.getItem("cart") ?? "[]") as ItemCart[];
    items = items.filter(x => x.id != id);
    localStorage.setItem("cart", JSON.stringify(items));
  }

  cartIsEmpty(): boolean {
    var items = JSON.parse(localStorage.getItem("cart") ?? "[]") as ItemCart[];
    return items.length == 0;
  }

  carChangedEvent(): any {
    this.messageEvent.next(true);
  }

  carChangedReceiver(): Observable<any> {
    return this.messageEvent.asObservable();
  }
}
