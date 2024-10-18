import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private http = inject(HttpClient);
  constructor() { }

  getAll(){
    return this.http.get('http://localhost:3000/api/products')
  }
}
