import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';


import {ReactiveFormsModule,FormControl,FormGroup} from '@angular/forms'
import { LoginService } from '../../services/login.service';
import { Credenciales } from '../../interfaces/credenciales';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, NavBarComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

formularioLogin = new FormGroup({
  email: new FormControl(''),
  password: new FormControl ('')
});

_loginService = inject(LoginService);
_toastrService = inject(ToastrService);





handdlesubmint (){
 
  const emailLogin = this.formularioLogin.value.email;
  const passwordLogin = this.formularioLogin.value.password;
  
let credencialesIngreso: Credenciales | null = null;

if(typeof emailLogin === 'string' && typeof passwordLogin === 'string'){
  
  credencialesIngreso = {
    emailLogin,
    passwordLogin
  }

}

if(credencialesIngreso){
  this._loginService.inicioSesion(credencialesIngreso).subscribe({
    // manejar los errores en el front
    next: (res: any) => {
      // acá cuanto todo Ok -> 200
      console.log(res)
      if(res){
        localStorage.setItem('token', res.tokenGenerado)
        this._toastrService.success(res.mensaje)
        this._loginService.redireccionar();
      
      }

    },
    // acá es cuando hay un error o un estado diferente al 200
    error: (err)=>{
      console.log(err.error.mensaje);
      this._toastrService.error(err.error.mensaje || 'Ocurrió un error al iniciar sesión');
      this.formularioLogin.reset();
    }
  })
}

}







}
