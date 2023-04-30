import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'swm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products!: Array<ProductModel>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(product: ProductModel) {
    this.cartService.addNewProduct(product);
  }
}
