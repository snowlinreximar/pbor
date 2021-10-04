import { Component, OnInit } from '@angular/core';
import {Product} from '../../Product';
import {PRODUCTS} from '../../mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
