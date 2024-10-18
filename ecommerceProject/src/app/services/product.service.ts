import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import Product from '../../../types/Product';
>>>>>>> 4fa9b49079db0afc860aca9192e85d4c2fc06c19

@Injectable({
  providedIn: 'root',
})
export class ProductService {
<<<<<<< HEAD
private http = inject(HttpClient);
  constructor() { }

  getAll(){
    return this.http.get('http://localhost:3000/api/products')
=======
  private http = inject(HttpClient);
  constructor() {}

  getAllProducts() {
    return this.http.get('http://localhost:3000/api/products');
  }

  getOneProduct(productId: string) {
    return this.http.get(`http://localhost:3000/api/products` + productId);
>>>>>>> 4fa9b49079db0afc860aca9192e85d4c2fc06c19
  }
}
