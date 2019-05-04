import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Order } from 'shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase,
              private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order: Order){
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders(){
    return this.db.list('/orders').valueChanges();
  }

  getOrdersByUser(userId: string){
    return this.db.list('/orders', ref=> ref.orderByChild('userId').equalTo(userId)).valueChanges();
  }
}
