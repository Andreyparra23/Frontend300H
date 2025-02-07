import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelLicores } from '../interfaces/model-licores';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _httpClient = inject (HttpClient)
  private URL_PRODUCTOS = 'http://localhost:9000/productos'

//POST
postProducto(productos: ModelLicores){
  return this._httpClient.post(this.URL_PRODUCTOS+'/crear',productos );
   
}


//GET
getProduct() {
  return this._httpClient.get(this.URL_PRODUCTOS+ '/obtener');
}



//PUT

putProducto(id: string, producto: ModelLicores): Observable<any> {
  return this._httpClient.put(this.URL_PRODUCTOS+`/productos/${id}`, producto);
}



//DELETE
deleteProducto(id: string) {
  return this._httpClient.delete(this.URL_PRODUCTOS+`/eliminar/${id}`);
}

}




}
 