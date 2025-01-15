import { Component } from '@angular/core';
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';
import { CardProductoComponent } from '../../componentes/card-producto/card-producto.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { CarruselComponent } from '../../componentes/carrusel/carrusel.component';
@Component({
  selector: 'app-inicio',
  imports: [NavBarComponent,CardProductoComponent,FooterComponent,CarruselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
