import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { Plato } from 'src/app/models/plato.model';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent  implements OnInit{

  ListaCarrito: Plato[] = []
  total!: number
  constructor(
    private CarritoService : CarritoService
  ){}
  ngOnInit() {
    this.ListaCarrito = this.CarritoService.getCarritoItems();
    this.total = this.CarritoService.getTotal()
  }

  reduceQuantity(plato: Plato){
    if (plato.quantity){
      plato.quantity -= 1
      if (plato.quantity >0){
        this.CarritoService.updateCarrito(this.ListaCarrito)
        this.total = this.CarritoService.getTotal()
      } else{
        this.CarritoService.removeItemDelCarrito(plato._id)
      }
    } 
  }

  incrementQuantity(plato: Plato){
    if (plato.quantity){
      plato.quantity += 1
      this.total = this.CarritoService.getTotal()
    }
    this.CarritoService.updateCarrito(this.ListaCarrito)
  }


}
