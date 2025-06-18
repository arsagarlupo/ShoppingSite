import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable } from 'rxjs';
import { Product, Tasks } from './product/productlist';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  private apiUrl = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  addProducts(task : Tasks): Observable<Product[]> {
    return this.http.post<Product[]>(this.apiUrl, task);
  }
  
}
