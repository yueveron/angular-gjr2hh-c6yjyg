import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import HttpClient

@Injectable({
  providedIn: 'root'
}) //  @Injectable() 装饰器表示，为 service 注册一个提供者
export class CartService {
  items = [];
  
  constructor(
    private http: HttpClient  // 把 HttpClient 注入到 CartService 的构造函数中
  ) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');  // 使用 HttpClient 的 get() 方法
  }
}