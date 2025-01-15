export interface OrderModel {
    product: string[]; //req
    user: string;//req
    orderDate?: Date;  //x defecto
    orderTotal: number; //req
}
