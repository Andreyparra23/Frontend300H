import { Injectable } from '@angular/core';
import { ProductsService } from './products.service'; // Servicio para productos
import { UsuariosModel } from '../interfaces/usuarios-model'; // Modelo para usuarios
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrlProducts = 'http://localhost:9000/products'; // URL para productos
  private apiUrlUsers = 'http://localhost:9000/users'; // URL para usuarios

  constructor(private http: HttpClient, private productsService: ProductsService) { }

  // Métodos para productos
  getProductos(): Observable<any> {
    return this.http.get(this.apiUrlProducts);
  }

  agregarProducto(producto: any): Observable<any> {
    return this.http.post(this.apiUrlProducts, producto);
  }

  actualizarProducto(id: string, producto: any): Observable<any> {
    return this.http.put(`${this.apiUrlProducts}/${id}`, producto);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrlProducts}/${id}`);
  }

  // Métodos para usuarios
  getUsuarios(): Observable<any> {
    return this.http.get(this.apiUrlUsers);
  }

  actualizarUsuario(id: string, usuario: any): Observable<any> {
    return this.http.put(`${this.apiUrlUsers}/${id}`, usuario);
  }

  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrlUsers}/${id}`);
  }
}
