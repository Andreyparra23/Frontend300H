import { Component } from '@angular/core';
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';
import { CardPrincipalComponent } from '../../componentes/card-principal/card-principal.component';
import { FooterComponent } from '../../componentes/footer/footer.component';


@Component({
  selector: 'app-productos',
  imports: [NavBarComponent,CardPrincipalComponent,FooterComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
