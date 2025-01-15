 import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';



export const authGuard: CanActivateFn = (route, state) => {

  const _loginService = inject(LoginService);
  const _router = inject(Router); 

//validacion. inicio sesion? y/n
if (!_loginService.estaLogueado()){
return false;
_router.navigate(['/login ']);
}
//validacion admin
if (!_loginService.esAdmin()){
  _router.navigate(['/']);
return false;
}



  return true;
};
