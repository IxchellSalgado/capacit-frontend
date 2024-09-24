import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestOrderItemsDTO } from '../../models/order-items/request-order-items-dto';
import { ResponseOrderItemsDTO } from '../../models/order-items/response-order-items-dto';
import { OrderItems } from 'src/app/models/order-items/order-items';
import { Page } from 'src/app/models/order-items/page'
@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {

  private baseURL = "http://localhost:8080/api/v1/orderItems";

  constructor(private httpClient: HttpClient) {  }

  eliminarOrderItem(id:Number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  ObtenerlistarOrderItems():Observable<ResponseOrderItemsDTO[]> {
    return this.httpClient.get<ResponseOrderItemsDTO[]>(`${this.baseURL}`);
  }

  // Método para crear un nuevo OrderItem
  createOrderItem(orderItem: RequestOrderItemsDTO): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, orderItem);
  }

  ObtenerOrderItemsPorId(id: number): Observable<ResponseOrderItemsDTO> {
    return this.httpClient.get<ResponseOrderItemsDTO>(`${this.baseURL}/${id}`);
  }

  registrarOrderItem(orderItem : OrderItems):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, orderItem);
  }

  actualizarOrderItem(id:number, orderItem : OrderItems) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, orderItem);
  }
  
   // Método para obtener la lista de pedidos
   getPedidos(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:8080/api/v1/pedidos');
  }

  // Método para obtener la lista de productos
  getProductos(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:8080/api/v1/productos');
  }

  getOrderItemsPaged(page: number, size: number): Observable<Page<ResponseOrderItemsDTO>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.httpClient.get<Page<ResponseOrderItemsDTO>>(`${this.baseURL}/paged`, { params });
  }
}
