import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productoModel } from 'src/app/models/productoModel';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
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

