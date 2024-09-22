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
  productos: { id: number, nombre: string, precio: number }[] = [];
  orderItems : OrderItems = new OrderItems();
  constructor(private orderItemsService: OrderItemsService,private router:Router, private productoService: ProductoService, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
      console.log('Productos:', this.productos); 
    }, error => {
      console.error('Error al obtener productos:', error);
    });

    this.pedidoService.obtenerListaDePedidos().subscribe(data => {
      this.pedidos = data;
      console.log('Pedidos:', this.pedidos); 
    });

    //console.log('Precio asignado:', this.orderItems.precio)
  }

  onProductoSeleccionado(productoId: number): void {
    console.log('Producto seleccionado:', productoId);
    const productoSeleccionado = this.productos.find(producto => producto.id === +productoId);
    if (productoSeleccionado) {
      this.orderItems.precio = productoSeleccionado.precio;
      console.log('Precio asignado:', this.orderItems.precio);
    } else {
      console.log('Producto no encontrado');
    }
  }
  
  logSeleccion(productoId: number): void {
    console.log('Producto seleccionado:', productoId);
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
