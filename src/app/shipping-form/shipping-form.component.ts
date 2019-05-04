import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from '../models/order';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  shipping = {}; 
  subscription: Subscription;
  userId: string;
  @Input('cart') cart : ShoppingCart;

  constructor( private orderService: OrderService,
                private router: Router, 
                private authService: AuthService
                ) { }

  ngOnInit() {
    this.subscription = this.authService.user$.subscribe(user => this.userId = user.uid)
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key])
  }    

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
