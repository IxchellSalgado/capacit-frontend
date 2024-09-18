import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestOrderItemsDTO } from '../../models/order-items/request-order-items-dto';
import { ResponseOrderItemsDTO } from '../../models/order-items/response-order-items-dto';
import { OrderItems } from 'src/app/models/order-items/order-items';

@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {

  private baseURL = "http://localhost:8080/api/v1/orderItems";

  constructor(private httpClient: HttpClient) {  }

  ObtenerlistarOrderItems():Observable<ResponseOrderItemsDTO[]> {
    return this.httpClient.get<ResponseOrderItemsDTO[]>(`${this.baseURL}`);
  }

  // Método para crear un nuevo OrderItem
  createOrderItem(orderItem: RequestOrderItemsDTO): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, orderItem);
  }

  //Este metodo sirve para obtener los detalles de los pedidos por parametros
  obtenerListaDeOrderItemsPorParams(request: RequestOrderItemsDTO): Observable<ResponseOrderItemsDTO[]> {
    return this.httpClient.post<ResponseOrderItemsDTO[]>(`${this.baseURL}/filtro`, request);
  }

  ObtenerOrderItemsPorId(id: number): Observable<ResponseOrderItemsDTO> {
    return this.httpClient.get<ResponseOrderItemsDTO>(`${this.baseURL}/${id}`);
  }
  
  eliminarOrderItem(id:Number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  registrarOrderItem(orderItem : OrderItems):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, orderItem);
  }

  actualizarOrderItem(id:number, orderItem : OrderItems) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, orderItem);
  }
}
