import { Component, inject, OnInit } from '@angular/core';
/* import { AdminService } from '../../services/admin.service'; */
import { ProductsService } from '../../services/products.service';
import { UserService } from '../../services/user.service';
import { UsuariosModel } from '../../interfaces/usuarios-model';
import { ModelLicores } from '../../interfaces/model-licores';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-admin',
  imports: [NgFor],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productos: ModelLicores[] = [];
  usuarios: UsuariosModel[] = [];

_userService = inject(UserService);
_productsService = inject(ProductsService)


  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerUsuarios();
  }

  // Obtener lista de productos
  obtenerProductos(): void {
    this._productsService.getProduct().subscribe(
      {
        next: (res: any) => {
          console.log('res', res);
          this.productos = res.datos;
          // console.log(this.allProducts);
        },
        error: (err) => {
          console.error('Hubo un error', err);
        }
      }
     
    );
  }

  // Obtener lista de usuarios
  obtenerUsuarios(): void {
    this._userService.getUsuarios().subscribe(
      {
        
          next: (res: any) => {
            console.log('res', res);
            this.usuarios = res.users;
            // console.log(this.allProducts);
          },
          error: (err) => {
            console.error('Hubo un error', err);
          }
        
      }

    )
   }



  // Agregar producto
  agregarProducto(): void {
   /*  const nuevoProducto = {
      imagen: '',
      nombre: 'Nuevo Producto',
      categoria: 'Categoría nueva',
      precio: 100
    };

   

    this.adminService.agregarProducto(nuevoProducto).subscribe(
      (data) => {
        this.productos.push(data);
      },
      (error) => {
        console.error('Error al agregar el producto', error);
      }
    ); */
  }

  // Editar producto
  editarProducto(producto: any): void {
    /* const productoActualizado = {
      ...producto,
      precio: producto.precio + 10 // Ejemplo de cambio
    };

    this.adminService.actualizarProducto(producto._id, productoActualizado).subscribe(
      (data) => {
        const index = this.productos.findIndex(p => p._id === producto._id);
        if (index !== -1) {
          this.productos[index] = data;
        }
      },
      (error) => {
        console.error('Error al actualizar el producto', error);
      }
    ); */
  }

  // Eliminar producto
  eliminarProducto(id: string): void {
   /*  this.adminService.eliminarProducto(id).subscribe(
      () => {
        this.productos = this.productos.filter(p => p._id !== id);
      },
      (error) => {
        console.error('Error al eliminar el producto', error);
      } 
    );*/
  }


  /*   this.adminService.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Error al obtener los usuarios', error);
      }
    ); */
  };

  // Editar usuario
  /*editarUsuario(id:string) {
      const usuarioActualizado = {
      ...usuario,
      rol: 'Admin' // Ejemplo de cambio
    };

    this.adminService.actualizarUsuario(usuario._id, usuarioActualizado).subscribe(
      (data) => {
        const index = this.usuarios.findIndex(u => u._id === usuario._id);
        if (index !== -1) {
          this.usuarios[index] = data;
        }
      },
      (error) => {
        console.error('Error al actualizar el usuario', error);
      } 
    ); 
  };*/

  // Eliminar usuario
 /*   eliminarUsuario(id:string) {
   this.adminService.eliminarUsuario(id).subscribe(
      () => {
        this.usuarios = this.usuarios.filter(u => u._id !== id);
      },
      (error) => {
        console.error('Error al eliminar el usuario', error);
      }
    );
  }
}; */
