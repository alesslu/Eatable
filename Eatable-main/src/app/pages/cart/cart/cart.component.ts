import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

}

// import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/services/cart.service';
// import { Dish } from 'src/app/models/dish.model';
// @Component({
//   selector: 'app-cart-view',
//   templateUrl: './cart-view.component.html',
//   styleUrls: ['./cart-view.component.css']
// })
// export class CartViewComponent implements OnInit {

//   cartList: Dish[] = []
//   total!: number
//   constructor(
//     private cartService : CartService
//   ){}
//   ngOnInit() {
//     this.cartList = this.cartService.getCartItems();
//     this.total = this.cartService.getTotal()
//   }

//   reduceQuantity(dish: Dish){
//     if (dish.quantity){
//       dish.quantity -= 1
//       if (dish.quantity >0){
//         this.cartService.updateCart(this.cartList)
//         this.total = this.cartService.getTotal()
//       } else{
//         this.cartService.removeItemFromCart(dish._id)
//       }
//     } 
//   }

//   incrementQuantity(dish: Dish){
//     if (dish.quantity){
//       dish.quantity += 1
//       this.total = this.cartService.getTotal()
//     }
//     this.cartService.updateCart(this.cartList)
//   }
// }