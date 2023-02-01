import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { items, ordersModel } from 'src/app/models/ordersModel';
import { productoModel } from 'src/app/models/productoModel';
import { userModel } from 'src/app/models/userModel';
import { CartService } from 'src/app/services/cart.service';
import { OrderserviceService } from 'src/app/services/orderservice.service';
import { SessionsService } from 'src/app/services/sessions.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  total!: number;
  iduser = localStorage.getItem('iduser')!;

  public profile: userModel = {
    email: '',
    _id: '',
    name: '',
    address: '',
    password: '',
    phone: 0,
  };

  // cartList: productoModel[] = []
  cartList = JSON.parse(localStorage.getItem("cart")!)

  order: ordersModel | null = null;
  CurrentDate = new Date();

  constructor(
    private router: Router,
    private cartService: CartService,
    private userService: UserService,
    private orderService: OrderserviceService,
  ) { }

  ngOnInit() {
    console.log(this.CurrentDate)
    this.cartList = this.cartService.getCartItems();
    this.total = this.cartService.getTotal()
    this.userService.getProfile(this.iduser).subscribe((res: any) => {
      this.profile = res;
    });
  }

  updateAddress(){
    this.router.navigate(['principal/profile/update']);
  }

  Ordenar(){
    this.order = {
      // _id: "",
      user_id: this.iduser,
      delivery_address: this.profile.address!,
      phone:this.profile.phone!,
      items: [],
      created_date: this.CurrentDate,
      total:this.total
    }

    this.cartList.forEach((p: productoModel) => {
      this.order?.items!.push({
        product_id: p._id,
        quantity: p.quantity,
        price:p.price,
        // order_id: this.order._id;
      })
    });
    this.orderService.create(this.order).subscribe((res: any) => {
      console.log(res);
      this.order = null;
      alert("Su orden fue registrada con exito");
      localStorage.removeItem("cart")
      this.router.navigate(["/principal/home"]);
    });
  }

}