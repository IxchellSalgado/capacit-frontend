import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = 'http://localhost:8080/api/v1/producto';

  constructor(private httpClient: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.baseUrl);
  }
}
