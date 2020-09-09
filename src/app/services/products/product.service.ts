import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(public httpClient: HttpClient) { }
  getStock(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8000/api/v1/stock/');
  }
  getProducts(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8000/api/v1/products/');
  }
}
