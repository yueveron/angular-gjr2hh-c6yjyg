import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms'; // import FormBuilder


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = [];
  checkoutForm; // 表单对象

  constructor(
    private cartService:CartService,
    private formBuilder: FormBuilder,
  ) {
    // 把 checkoutForm 属性设置为一个包含 name 和 address 字段的表单对象。使用 FormBuilder 的 group() 方法来创建它，把该语句加入构造函数的花括号 {} 中间 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    //
    alert('Your order has been submitted ' + customerData.name + ' ' + customerData.address);
  }

}