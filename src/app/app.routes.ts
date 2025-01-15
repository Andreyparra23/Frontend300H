import { Routes } from '@angular/router';

import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { RegisterComponent } from './paginas/registro/register.component';
import { ProductosComponent } from './paginas/productos/productos.component';




//guard
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
{path: '', component: InicioComponent, title: "inicio"},

{path: 'productos', component: ProductosComponent, title: 'productos'},

{path: 'login',component: LoginComponent, title: 'login', 

},
{path: 'admin', component: AdminComponent, title: 'administrador'//* *,  canActivate: [authGuard] */  */,
},

{path: 'registro', component: RegisterComponent, title: 'registro',
  },

{path: '**', component: NotFoundComponent, title: 'no encontrado'}
];
