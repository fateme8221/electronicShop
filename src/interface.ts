export interface Product {
    id:string;
    title:string;
    price:number;
    count:number;
    img:string;
 }
 export interface CartItem {
    product : Product;
    qty:number;
 }