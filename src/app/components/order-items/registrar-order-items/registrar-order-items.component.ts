import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderItems } from 'src/app/models/order-items/order-items';
import { OrderItemsService } from 'src/app/servicios/order-items/order-items.service';
import { PedidoService } from 'src/app/servicios/pedido/pedido.service';
import { ProductoService } from 'src/app/servicios/producto/producto.service';
@Component({
  selector: 'app-registrar-order-items',
  templateUrl: './registrar-order-items.component.html',
  styleUrls: ['./registrar-order-items.component.css']
})
export class RegistrarOrderItemsComponent implements OnInit {
  pedidos: {id: number}[] = [];  
  productos: { id: number, nombre: string }[] = [];
  orderItems : OrderItems = new OrderItems();
  constructor(private orderItemsService: OrderItemsService,private router:Router, private productoService: ProductoService, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
      console.log('Productos:', this.productos); 
    });
    this.pedidoService.obtenerListaDePedidos().subscribe(data => {
      this.pedidos = data;
      console.log('Pedidos:', this.pedidos); 
    });
  }
  

  guardarOrderItems() {
    this.orderItemsService.registrarOrderItem(this.orderItems).subscribe(dato => {
      console.log(dato);    
      this.irALaListaDeOrderItems();
  }, error => console.log(error));
  }

  irALaListaDeOrderItems() {
    this.router.navigate(['/OrderItems']);
  }
 
  onSubmit() {
    this.guardarOrderItems();
  }

}
