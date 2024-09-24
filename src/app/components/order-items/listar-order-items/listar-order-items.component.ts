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
  request: RequestOrderItemsDTO;
  totalPages: number = 0;
  page: number = 0;
  size: number = 7; 

  constructor(private orderItemsService: OrderItemsService, private router : Router) { }

  ngOnInit(): void {
    this.loadOrderItems(this.page, this.size);
  }
  
  loadOrderItems(page: number, size: number): void {
    this.orderItemsService.getOrderItemsPaged(page, size).subscribe(response => {
      this.orderItems = response.content;
      this.totalPages = response.totalPages;
    });
  }

  onPageChange(newPage: number): void {
    if (newPage >= 0 && newPage < this.totalPages) {
      this.page = newPage; // Actualiza la página actual
      this.loadOrderItems(this.page, this.size); // Carga los items de la nueva página
    }
  }

  eliminarOrderItems(id: number) {
    swal({
      title: "¿Estás seguro?",
      text: "Confirma si deseas eliminar el Detalle del Pedido",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Si, elíminalo",
      cancelButtonText: "No, cancelar",
      confirmButtonClass: "btn btn-success",
      cancelButtonClass: "btn btn-danger",
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.orderItemsService.eliminarOrderItem(id).subscribe(dato => {
          console.log(dato);
          // Volver a obtener la lista después de eliminar, usando paginación
        this.orderItemsService.getOrderItemsPaged(this.page, this.size).subscribe((data) => {
          this.orderItems = data.content;  // Actualizar la lista
          this.page = data.number; // Actualizar la página actual si es necesario
        });
          swal(
            'Detalle del Pedido eliminado',
            'El Detalle del Pedido ha sido eliminado con éxito',
            'success'
          );
        });
      }
    });
  }

  verDetallesOrderItems(id:number) {
    this.router.navigate(['detalle-OrderItems', id]);
  }
}
