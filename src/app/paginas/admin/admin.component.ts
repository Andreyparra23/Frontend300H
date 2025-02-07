import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { UserService } from '../../services/user.service';
import { UsuariosModel } from '../../interfaces/usuarios-model';
import { ModelLicores } from '../../interfaces/model-licores';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productos: ModelLicores[] = [];
  usuarios: UsuariosModel[] = [];

  nuevoProducto: ModelLicores = { name: '', category: '', price: 0, description: '', Image: '' }; // Inicializa el nuevo producto
  isVisible: boolean = false;

  usuarioSeleccionado: UsuariosModel = {  
     fullname: '',
    email: '' ,
    typeDocument: '',
    numberDocument: '',
    password: '',
}


isEditVisible: boolean = false; // Para controlar la visibilidad del modal de actualizar
productoSeleccionado: ModelLicores = { _id: '', name: '', category: '', price: 0, description: '', Image: '' }; 


  _userService = inject(UserService);
  _productsService = inject(ProductsService);


  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerUsuarios();
  }

















  

 
  
  // Muestra el modal de editar y asigna el producto seleccionado
  mostrarModalEditar(producto: ModelLicores): void {
    this.productoSeleccionado = { ...producto }; // Clona el producto seleccionado
    this.isEditVisible = true; // Muestra el modal de editar
  }
  
  isEditUserVisible: boolean = false; // Para controlar la visibilidad del modal de editar usuario
  
  // Muestra el modal de editar y asigna el usuario seleccionado
  mostrarModalEditarUsuario(usuario: UsuariosModel): void {
    this.usuarioSeleccionado = { ...usuario }; // Clona el usuario seleccionado
    this.isEditUserVisible = true; // Muestra el modal de editar
  }
  
  // Cierra el modal de editar usuario
  cerrarModalEditarUsuario(): void {
    this.isEditUserVisible = false; // Oculta el modal
  }
  
  // Función para actualizar el usuario
  actualizarUsuario(): void {
    if (!this.usuarioSeleccionado || !this.usuarioSeleccionado._id) {
      console.error('No se ha seleccionado un usuario válido para actualizar');
      return;
    }
  
    this._userService.putUsuario(this.usuarioSeleccionado._id, this.usuarioSeleccionado).subscribe({
      next: (res) => {
        console.log('Usuario actualizado:', res);
        this.obtenerUsuarios(); // Refresca la lista de usuarios
        this.isEditUserVisible = false; // Cierra el modal de editar
      },
      error: (err) => {
        console.error('Error al actualizar el usuario', err);
      }
    });
  }
  





  // Cierra el modal de editar
  cerrarModalEditar(): void {
    this.isEditVisible = false; // Oculta el modal
  }
  
  // Función para actualizar el producto
  actualizarProducto(): void {
    if (!this.productoSeleccionado || !this.productoSeleccionado._id) {
      console.error('No se ha seleccionado un producto válido para actualizar');
      return;
    }
  
    this._productsService.putProducto(this.productoSeleccionado._id, this.productoSeleccionado).subscribe({
      next: (res) => {
        console.log('Producto actualizado:', res);
        this.obtenerProductos(); // Refresca la lista de productos
        this.isEditVisible = false; // Cierra el modal de editar
      },
      error: (err) => {
        console.error('Error al actualizar el producto', err);
      }
    });
  }
  

  // Obtener lista de productos
  obtenerProductos(): void {
    this._productsService.getProduct().subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.productos = res.datos;
      },
      error: (err) => {
        console.error('Hubo un error', err);
      }
    });
  }

  // Obtener lista de usuarios
  obtenerUsuarios(): void {
    this._userService.getUsuarios().subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.usuarios = res.users;
      },
      error: (err) => {
        console.error('Hubo un error', err);
      }
    });
  }




  //agregar producto
  agregarProducto() {
    this.isVisible = this.isVisible ? false : true;
    console.log('nuevoProducto',this.nuevoProducto)
  }


  // Eliminar producto directamente
  eliminarProducto(productoId: string): void {
    this._productsService.deleteProducto(productoId).subscribe({
      next: () => {
        console.log('Producto eliminado');
        this.obtenerProductos(); // Refresca la lista de productos
      },
      error: (err) => {
        console.error('Hubo un error al eliminar el producto', err);
      }
    });
  }

   // Guardar nuevo producto
   guardarNuevoProducto(): void {
    console.log(this.nuevoProducto)
    this._productsService.postProducto(this.nuevoProducto).subscribe({
      next: (res) => {
        console.log(res);
        this.obtenerProductos(); // Refresca la lista de productos

      },
      error: (err) => {
        console.error('Error al agregar el producto', err);
      }
    });
  }







}