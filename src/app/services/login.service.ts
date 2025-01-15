
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { jwtDecode } from "jwt-decode";
import { Credenciales } from '../interfaces/credenciales';

@Injectable({

  providedIn: 'root'
})


export class LoginService {
private _httpClient = inject(HttpClient);
private _router = inject(Router);
public _toastr = inject(ToastrService);


private URL_LOGIN = 'http://localhost:9000/iniciarSesion/';


//inicio sesion
inicioSesion (credencialesIngreso: Credenciales){
//peticion POST
return this._httpClient.post(this.URL_LOGIN, credencialesIngreso);
}

//token
obtenerToken() {
  return localStorage.getItem('token');
}

//validar al admin si o no
esAdmin(){
  const token = this.obtenerToken();
  if(token){
const decodificado: any = jwtDecode (token);
  
return decodificado.isAdmin ? true : false;

}else {
    console.error("no se encontro token")
    return false
  }
}

//redireccion
redireccionar(){
  if (this.esAdmin()){
    this._router.navigate(['/admin']);

  }else {
this._router.navigate(['/'])
  }
}

//inicio de sesion satisfactorio?
estaLogueado(){
  return this.obtenerToken() ? true : false;

}


//cierre sesion
cierreSesion(){
  this._toastr.info('Se cerro la sesión exitosamente');
  
    // + eliminar el token 
    localStorage.removeItem('token');
    //redireccion home
    this._router.navigate(['/']);

}

}



