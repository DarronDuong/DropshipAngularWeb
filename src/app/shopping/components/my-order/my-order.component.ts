import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  orders$;
  constructor (private authService: AuthService, private orderService: OrderService) { 
    this.orders$ = authService.user$
    .pipe(
      switchMap(u => orderService.getOrdersByUser(u.uid))
    );
  }

  ngOnInit() {
  }


}
