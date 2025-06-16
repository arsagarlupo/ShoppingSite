import { Component, Input } from '@angular/core';
import { Product } from '../product/productlist';

@Component({
  selector: 'app-productcard',
  imports: [],
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent {
@Input() product !: Product
emitAddToCart(product: Product) {
  // Emit the add to cart event
}
}