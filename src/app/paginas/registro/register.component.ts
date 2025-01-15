import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UsuariosModel } from '../../interfaces/usuarios-model';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  imports: [RouterOutlet, NavBarComponent, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})
export class RegisterComponent {

  formularioRegister = new FormGroup({
    nombreCompleto: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    tipoDocumento: new FormControl(''),
    numeroDocumento: new FormControl('')
  });

  _userService = inject(UserService);
  _toastrService = inject(ToastrService);
  _router = inject(Router); 

  
  handdleSubmit() {
    if (this.formularioRegister.valid) {
      const email = this.formularioRegister.value.email;
      const fullname = this.formularioRegister.value.nombreCompleto;
      const password = this.formularioRegister.value.password;
      const typeDocument = this.formularioRegister.value.tipoDocumento;
      const numberDocument = this.formularioRegister.value.numeroDocumento;
  
      const credencialesDeRegistro = {
        email: email || '',
        fullname: fullname || '',
        password: password || '',
        typeDocument: typeDocument || '',
        numberDocument: numberDocument || ''
      };
  
      this._userService.postUsuarios(credencialesDeRegistro).subscribe({
        next: (res: any) => {
          console.log('Respuesta del servidor:', res);
  this._toastrService.success('usuario creado correctamente')
         this._router.navigate(['/login'])
        },
        error: (err) => {
          console.error('Error del servidor:', err);
          this._toastrService.error(err.error?.mensaje || 'Ocurrió un error al registrarte');
        }
      });
    } else {
      this._toastrService.error('Por favor, completa todos los campos correctamente.');
    }
  }
}  