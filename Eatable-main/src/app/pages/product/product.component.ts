import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productoModel } from 'src/app/models/productoModel';
<<<<<<< HEAD
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
=======
>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
<<<<<<< HEAD
  ProductActual: productoModel = {
    _id: "",
    name: "",
    price: 0,
    category: "",
    description: "",
    picture_url: "",
    quantity: 0,
    __v: 0,
  };

  productId: string | null = null;
  AgreadoAlCarrito: boolean = false;
  cartItem: "Added to cart" | "Add to cart" = "Add to cart";

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')
      if (this.productId) {
        this.productService.getProductById(this.productId)
          .subscribe((data) => {
            this.ProductActual = data
            this.AgreadoAlCarrito = this.cartService.isItemAddedToCart(this.ProductActual._id)
            this.cartItem = this.AgreadoAlCarrito ? "Added to cart" : "Add to cart";
          }
          )
      }
    })
  }

  onClick() {
    this.cartService.addItemToCart(this.ProductActual)
    this.AgreadoAlCarrito = true;
    this.cartItem = "Added to cart";
    console.log("agregado")
  }
}

=======
  currentProduct!: productoModel
  productId: string | null = null

  constructor(
    private route: ActivatedRoute,
    // private orderService: OrderserviceService
  ){}
  
  ngOnInit(){
    // this.route.paramMap.subscribe(params => {
    //   this.productId = params.get('id')
    //   if (this.productId) {
    //     this.productsService.getProductById(this.productId)
    //     .subscribe((data) =>
    //     this.currentProduct = data)
    //   }
    // })
  }
}


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { DishService } from 'src/app/services/dish.service';
// import { CartService } from 'src/app/services/cart.service';
// import { Dish } from 'src/app/models/dish.model';


// @Component({
//   selector: 'app-dish-detail-view',
//   templateUrl: './dish-detail-view.component.html',
//   styleUrls: ['./dish-detail-view.component.css']
// })
// export class DishDetailViewComponent implements OnInit {
//   currentDish: Dish = {
//     _id: "",
//     name: "",
//     price: 0,
//     category: "",
//     description: "",
//     picture_url: "",
//     quantity: 0,
//     __v: 0,
//   };
//   dishId!: string | null;
//   isAddedToCart!: boolean;
//   cartLabel: string = this.isAddedToCart ? "Added to cart" : "Add to cart";

//   constructor(
//     private route: ActivatedRoute,
//     private dishService: DishService,
//     private cartService: CartService
//   ){}
  
//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       this.dishId = params.get('id')
//       if (this.dishId) {
//         this.dishService.getDishById(this.dishId)
//         .subscribe((data) =>{
//           this.currentDish = data
//           this.isAddedToCart = this.cartService.isItemAddedToCart(this.currentDish._id)
//         }
//         )
//       }
//     })
//   }

//   onClick(){
//     this.cartService.addItemToCart(this.currentDish)
//     console.log("agregado")
//   }
// }
>>>>>>> 945eb7379754c8fa87ea0770f4d15249ac9f8d31
