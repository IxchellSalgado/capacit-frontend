import { Component, OnInit } from '@angular/core';
import { OrderItems } from 'src/app/models/order-items/order-items';
import { OrderItemsService } from 'src/app/servicios/order-items/order-items.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  orderitems : OrderItems[];

  constructor(private orderItemsService :OrderItemsService, private router: Router) { }

  ngOnInit(): void {
    this.listarOrderItems();
  }

  listarOrderItems() {
    this.orderItemsService.listarOrderItems().subscribe(dato => {
      this.orderitems = dato;
      console.log(dato);
    });
  }

}
