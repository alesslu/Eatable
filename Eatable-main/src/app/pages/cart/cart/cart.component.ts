import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { productoModel } from 'src/app/models/productoModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: productoModel[] = []
  total!: number
  constructor(
    private cartService : CartService,
    private router: Router
  ){}
  ngOnInit() {
    this.cartList = this.cartService.getCartItems();
    this.total = this.cartService.getTotal()
  }

  reduceQuantity(dish: productoModel){
    if (dish.quantity){
      dish.quantity -= 1
      if (dish.quantity == 0){
        this.cartService.removeItemFromCart(dish._id)
        this.cartList = this.cartService.getCartItems();
      }
      this.cartService.updateCart(this.cartList)
      this.total = this.cartService.getTotal()
    } 
  }

  incrementQuantity(dish: productoModel){
    if (dish.quantity){
      dish.quantity += 1
      this.cartService.updateCart(this.cartList)
      this.total = this.cartService.getTotal()
    }
  }

  checkout(){
    this.router.navigate(["principal/home/checkout"]);
  }
}
