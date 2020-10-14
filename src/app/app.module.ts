import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // 导入 HttpClientModule 
import { NgZorroAntdModule } from 'ng-zorro-antd' // ng-antd 组件库

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CrudListComponent } from './crud-list/crud-list.component';
import { EventEditModal } from './layer/modal/event-edit/event-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, // 把 HttpClientModule 添加到 AppModule @NgModule() 的 imports 数组中，以便全局注册 Angular 的 HttpClient
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'list', component: CrudListComponent },
    ]),
    NgZorroAntdModule // 导入 ng-zorro-antd 模块 
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CrudListComponent,
    EventEditModal
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }
