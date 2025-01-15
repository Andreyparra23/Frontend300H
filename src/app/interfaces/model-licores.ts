export interface ModelLicores {
    Image: string;  //falta la url de la img - req
    name: string; //nombre del producto -req
    category?: string;  //categoria de producto -noreq
    price: number;      //precio req
    description: string; //descripcion req
 _id?: string;


}
 