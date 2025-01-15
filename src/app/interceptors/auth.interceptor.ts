import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';



export const authInterceptor: HttpInterceptorFn = (req, next) => {

const _loginService = inject (LoginService);

const token = _loginService.obtenerToken();
const tokenReq = token ? 
req.clone ({setHeaders: {Authorization:'bearer ' + token}})
: //los dos puntos significan "si no"
req; //si no hay token no mande ninguna cabecera de la peticion 


  return next(tokenReq);
};
