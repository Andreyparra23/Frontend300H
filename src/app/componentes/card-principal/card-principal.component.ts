import { Component } from '@angular/core';


import { ProductsService } from '../../services/products.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ModelLicores } from '../../interfaces/model-licores';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card-principal',
  standalone: true,
  imports: [NgFor ],
  templateUrl: './card-principal.component.html',
  styleUrl: './card-principal.component.css'
})
export class CardPrincipalComponent {
_productosService = inject(ProductsService);
_toastrservice = inject (ToastrService);

allProducts: ModelLicores[ ] =[]; 

obtenerProductos (){
this._productosService.getProduct().subscribe(
{
  next: (res: any) => {
console.log (res);
this.allProducts= res.datos
  }, 
  error: (error: any)=>{
console.log (error);
  }
}
);
}
//para que se muestre a cargar la pagina
ngOnInit (){
  this.obtenerProductos();
}





crearProductos (){

}


actualizarProductos (){

}


deleteProductos (){

}



}
