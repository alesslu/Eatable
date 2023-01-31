
import { Injectable } from '@angular/core';
import { productoModel } from '../models/productoModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  getCartItems(){
    let dishes: productoModel[] = []
    let cartItems = JSON.parse(localStorage.getItem("cart")!)
    return cartItems || dishes
  }

  addItemToCart(Item: productoModel){
    if (this.isItemAddedToCart(Item._id)){
      return
    }
    let cartItems = JSON.parse(localStorage.getItem("cart")!) || []
    cartItems.push({...Item, quantity: 1})
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }

  removeItemFromCart(id: String){
    let cartItems = JSON.parse(localStorage.getItem("cart")!)
    cartItems = cartItems.filter((item: productoModel) => item._id !== id)
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }

  isItemAddedToCart(id: String){
    let cartItems = JSON.parse(localStorage.getItem("cart")!)
    return (cartItems?.filter((item: productoModel) => item._id === id).length > 0)
  }

  updateCart(cart: productoModel[]){
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  getTotal(){
    let cartItems = JSON.parse(localStorage.getItem("cart")!)
    return cartItems.reduce((acc: number, cur: productoModel) => acc + (cur.price * (cur.quantity || 0)), 0)
  }
}
