import { Component, OnInit } from '@angular/core';
import { OrderItemsService } from 'src/app/servicios/order-items/order-items.service';
import { RequestOrderItemsDTO } from '../../../models/order-items/request-order-items-dto';
import { ResponseOrderItemsDTO } from '../../../models/order-items/response-order-items-dto';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar-order-items',
  templateUrl: './listar-order-items.component.html',
  styleUrls: ['./listar-order-items.component.css']
})
export class ListarOrderItemsComponent implements OnInit {
  orderItems: ResponseOrderItemsDTO[] = [];
  filtro: RequestOrderItemsDTO;

  constructor(private orderItemsService: OrderItemsService, private router : Router) { }

  ngOnInit(): void {
    this.orderItemsService.ObtenerlistarOrderItems().subscribe((data) => {
      this.orderItems = data;  // Asignar a la variable orderitems que usas en la tabla
    });
  }
  listarOrderItems(): void {
    this.orderItemsService.obtenerListaDeOrderItemsPorParams(this.filtro).subscribe(dato => {
      this.orderItems = dato;  // Asignar el resultado a la variable orderitems
    });
  }
  actualizarOrderItems(id:number) {
    this.router.navigate(['actualizar-OrderItems',id]);
  }

  eliminarOrderItems(id:number) {
    swal({
      title : "¿Estás seguro?",
      text : "Confirma si deseas eliminar el Detalle del Pedido",
      type : "warning",
      showCancelButton : true,
      confirmButtonColor : '#3085d6',
      cancelButtonColor : '#d33',
      confirmButtonText : "Si, eliminalo",
      cancelButtonText : "No, cancelar",
      confirmButtonClass : "btn btn-success",
      cancelButtonClass : "btn btn-danger",
      buttonsStyling : true
    }).then((result) => {
      if (result.value) {
        this.orderItemsService.eliminarOrderItem(id).subscribe(dato => {
          console.log(dato);
          this.listarOrderItems();
          swal(
            'Detalle del Pedido eliminado',
            'El Detalle del Pedido ha sido eliminado con éxito',
            'success'
          )
        });
      }
    })
  }

  verDetallesOrderItems(id:number) {
    this.router.navigate(['detalle-OrderItems',id]);
  }

}
