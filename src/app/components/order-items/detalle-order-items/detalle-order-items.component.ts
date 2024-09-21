import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { ResponseOrderItemsDTO } from 'src/app/models/order-items/response-order-items-dto';
import { OrderItemsService } from 'src/app/servicios/order-items/order-items.service';

@Component({
  selector: 'app-detalle-order-items',
  templateUrl: './detalle-order-items.component.html',
  styleUrls: ['./detalle-order-items.component.css']
})
export class DetalleOrderItemsComponent implements OnInit {
  id: number;
  orderItems: ResponseOrderItemsDTO;

  constructor(private route: ActivatedRoute, private orderItemsServicio: OrderItemsService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
    this.orderItemsServicio.ObtenerOrderItemsPorId(this.id).subscribe(dato => {
      this.orderItems = dato;
      // Puedes usar un alert o swal para mostrar los detalles si lo deseas
      swal(`Detalles de la orden del pedido:  ${this.orderItems.idPedido}`);
    });
  }
  
}
