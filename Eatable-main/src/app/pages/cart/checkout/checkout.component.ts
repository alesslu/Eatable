import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

}

// import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/services/cart.service';

// @Component({
//   selector: 'app-checkout-view',
//   templateUrl: './checkout-view.component.html',
//   styleUrls: ['./checkout-view.component.css']
// })
// export class CheckoutViewComponent implements OnInit {
//   total!: number

//   constructor(
//     private cartService: CartService
//   ){}

//   ngOnInit(){
//     this.total = this.cartService.getTotal()
//   }
// }