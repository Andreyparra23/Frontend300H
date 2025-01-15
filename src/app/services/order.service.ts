import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { OrderModel } from '../interfaces/order-model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _httpClient = inject (HttpClient);
  private URL_ORDENES = 'http://localhost:9000/ordenes'

  //POST
postOrdenes(ordenes: OrderModel) {
  return this._httpClient.post(this.URL_ORDENES+'/crear',ordenes)
}


  //GET
getOrdenes(){
  return this._httpClient.get(this.URL_ORDENES+'/obtener')
}



  //DELETE
deleteOrdenes(id: string){
  return this._httpClient.delete(this.URL_ORDENES+'/eliminar/'+id)

}


}
