 import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UsuariosModel } from '../interfaces/usuarios-model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _httpClient =inject(HttpClient)

  private URL_USUARIOS = 'http://localhost:9000/usuarios';



// POST: Crear un usuario nuevo
postUsuarios(user: UsuariosModel) {
  return this._httpClient.post(this.URL_USUARIOS + '/crear', user);

}



  //GET
getUsuarios(){

  return this._httpClient.get(this.URL_USUARIOS + '/obtener')
}
  

  //DELETE
deleteUsuarios(id:string){

  return this._httpClient.delete(this.URL_USUARIOS+ '/borrar/' + id)
}


//POST GPT
putUsuario(id: string, usuario: UsuariosModel): Observable<any> {
  return this._httpClient.put(`api/usuarios/${id}`, usuario);
}

}
