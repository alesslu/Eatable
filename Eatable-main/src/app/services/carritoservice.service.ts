import { Injectable } from '@angular/core';
import { productoModel } from '../models/productoModel';

@Injectable({
  providedIn: 'root'
})
export class CarritoserviceService {

  cartItems!: productoModel[]

  constructor() { }

  getCartItems(){
    return this.cartItems
  }
  
  addItemToCart(Item: productoModel){
    this.cartItems.push({...Item,quantity:1})
  }

  // removeItemFromCart(id: string){
  //   this.cartItems=this.cartItems.filter(item => item.id !== id)
  // }

  // isItemAddedToCart(id:string){
  //   return this.cartItems.filter(item => item.id === id).length
  // }



}


