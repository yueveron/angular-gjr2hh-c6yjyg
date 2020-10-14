import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

import { products } from '../products';
import { CartService } from '../cart.service'; // 1. import 购物车service

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product={}
  // ActivatedRoute 专门用于由 Angular 路由器加载的每个路由组件。它包含关于该路由，路由参数以及与该路由关联的其它数据的信息。
  // 2. CartService 用于把购物车服务注入到 constructor()
  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.product = products[+params.get('productId')];
    })
  }

  addToCart(product) {
    this.cartService.addToCart(product);  // 3. 使用购物车service的 addToCart() 方法
    window.alert('Your product has been added to the cart!');
  }

}