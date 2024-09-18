import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderItemsService } from 'src/app/servicios/order-items/order-items.service';
import { OrderItems } from 'src/app/models/order-items/order-items';
import { ResponseOrderItemsDTO } from 'src/app/models/order-items/response-order-items-dto';

@Component({
  selector: 'app-actualizar-order-items',
  templateUrl: './actualizar-order-items.component.html',
  styleUrls: ['./actualizar-order-items.component.css']
})
export class ActualizarOrderItemsComponent implements OnInit {

  ResponseOrderItemsDTO : ResponseOrderItemsDTO = new ResponseOrderItemsDTO();
  OrderItems : OrderItems = new OrderItems();
  constructor(private orderItemsService : OrderItemsService, private router : Router, private rutaActiva : ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe(params => {
      const id = +params.get('id'); // Obtener el ID de los parámetros de la ruta
      this.obtenerOrderItemsPorId(id);
    });
  }
  

  private obtenerOrderItemsPorId (id : number){
    this.orderItemsService.ObtenerOrderItemsPorId(id).subscribe(dato => {
      // Si necesitas transformar o mapear los datos
      this.OrderItems.id = dato.id; // Asegúrate de que los campos coincidan
      this.OrderItems.pedidoId = dato.idPedido;
      //this.OrderItems.productoId = dato.producto.id;
      this.OrderItems.precio = dato.precio;
      this.OrderItems.quantity = dato.quantity;
      console.log(this.OrderItems.id);
    });
  }

  irAListarOrderItems(){
    this.router.navigate(['/OrderItems']);
  }

  actualizarOrderItems(){
    this.orderItemsService.actualizarOrderItem(this.OrderItems.id, this.OrderItems).subscribe(dato => {
      console.log(dato);
      this.irAListarOrderItems();
    }, error => console.log(error));
  }

  onSubmit(){
    this.actualizarOrderItems();
  }

}
