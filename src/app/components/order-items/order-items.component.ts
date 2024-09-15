import { Component, OnInit } from '@angular/core';
import { OrderItemsService } from 'src/app/servicios/order-items/order-items.service';
import { RequestOrderItemsDTO } from '../../models/order-items/request-order-items-dto';
import { ResponseOrderItemsDTO } from '../../models/order-items/response-order-items-dto';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  orderitems: ResponseOrderItemsDTO[] = []; 
  filtro: RequestOrderItemsDTO;

  constructor(private orderItemsService: OrderItemsService) { }

  ngOnInit(): void {
    this.orderItemsService.ObtenerlistarOrderItems().subscribe((data) => {
      this.orderitems = data;  // Asignar a la variable orderitems que usas en la tabla
    });
  }
  
  

  listarOrderItems(): void {
    this.orderItemsService.obtenerListaDeOrderItemsPorParams(this.filtro).subscribe(dato => {
      this.orderitems = dato;  // Asignar el resultado a la variable orderitems
      console.log(dato);  // Mostrar los datos en consola para depurar
    });
  }

}
