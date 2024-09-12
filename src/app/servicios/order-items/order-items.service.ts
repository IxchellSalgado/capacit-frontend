import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {OrderItems} from '../../models/order-items/order-items';

@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {

  private baseURL = "http://localhost:8080/api/v1/orderItems";

  constructor(private httpClient: HttpClient) {  }

  listarOrderItems():Observable<OrderItems[]> {
    return this.httpClient.get<OrderItems[]>(`${this.baseURL}`);
  }

  getClienteById(id:Number):Observable<OrderItems> {
    return this.httpClient.get<OrderItems>(`${this.baseURL}/buscarPorId/${id}`);
  } 
}
