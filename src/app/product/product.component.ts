import { Component } from '@angular/core';
import { Product } from './productlist';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductcardComponent } from '../productcard/productcard.component';
import { error } from 'console';
import { ProductService } from '../product.service';
import { Tasks } from './productlist';

// import { ProductService } from './product.service.ts';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule,RouterModule,ProductcardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
  // Make sure this path is correct

export class ProductComponent {
  taskName:string='';
  assignee:string='';
  status:string='';

  searchedText: string = '';
  searchedFilter: string = '';
  products: Product[] = [];
  newPost: any;
  postErrorMessage: string="";

  constructor(private productService: ProductService) {}
  createPost() {
    this.taskName = '';
    this.assignee = '';

    // Simple validation
    if (!this.newPost.title.trim() || !this.newPost.body.trim()) {
      this.postErrorMessage = 'Please fill in both title and body.';
      return;
    }
  }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        console.log(this.products);
      },
      error: (err: any) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  // this.productService.getProducts().subscribe({
  //   next: (data: Product[]) => {
  //     this.products = data;
  //     console.log(this.products);
  //   }
}













  function ngOnInit() {
    throw new Error('Function not implemented.');
  }
//  filteredProducts() {
//     return this.products.filter(p => {
//       const matchSearch =
//         p.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
//         p.brand.toLowerCase().includes(this.searchText.toLowerCase());

//       const matchStock =
//         this.selectedFilter === 'all' ||
//         (this.selectedFilter === 'in-stock' && p.stock > 0) ||
//         (this.selectedFilter === 'Low Stock' && p.stock === 0);

//       return matchSearch && matchStock;
//     });
//   }
