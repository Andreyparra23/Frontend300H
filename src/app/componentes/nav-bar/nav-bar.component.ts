import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
//variable que ayuda a identeficar si el usuario esta logueado o no
islogged : boolean = false;

_loginService = inject(LoginService);

handleVisibilidadLogout() {
  this.islogged = this._loginService.estaLogueado();

}
handleLogout() {
  this._loginService.cierreSesion();
}
ngOnInit(){
  this.handleVisibilidadLogout();
}


}
