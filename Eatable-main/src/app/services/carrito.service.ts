import { Injectable } from '@angular/core';
import { Plato } from '../models/plato.model';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }

  getCarritoItems(){
    let platos: Plato[] = []
    let carritoItems = JSON.parse(localStorage.getItem("carrito")!)
    return carritoItems || platos
  }

  addItemAlCarrito(Item: Plato){
    console.log("AddItem")
    if (this.PlatoAgreadoAlCarrito(Item._id)){
      return
    }
    let CarritoItems = JSON.parse(localStorage.getItem("carrito")!) || []
    CarritoItems.push({...Item, quantity: 1})
    localStorage.setItem("carrito", JSON.stringify(CarritoItems))
  }


  removeItemDelCarrito(id: String){
    let CarritoItems = JSON.parse(localStorage.getItem("carrito")!)
    CarritoItems = CarritoItems.filter((item: Plato) => item._id !== id)
    localStorage.setItem("carrito", JSON.stringify(CarritoItems))
  }

  PlatoAgreadoAlCarrito(id: String){
    let CarritoItems = JSON.parse(localStorage.getItem("carrito")!)
    return (CarritoItems?.filter((item: Plato) => item._id === id).length > 0)
  }

  updateCarrito(carrito: Plato[]){
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }

  getTotal(){
    let CarritoItems = JSON.parse(localStorage.getItem("carrito")!)
    return CarritoItems.reduce((acc: number, cur: Plato) => acc + (cur.price * (cur.quantity || 0)), 0)
  }

}
