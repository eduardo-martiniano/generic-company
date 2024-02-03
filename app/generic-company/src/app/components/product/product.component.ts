import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    imageUrl: ''
  };
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.product = this.productService.getProduct(1);
  }
}
