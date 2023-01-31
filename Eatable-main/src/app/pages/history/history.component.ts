import { Component, OnInit } from '@angular/core';
import { items, ordersModel } from 'src/app/models/ordersModel';
import { productoModel } from 'src/app/models/productoModel';
import { OrderserviceService } from 'src/app/services/orderservice.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  constructor(
    private orderService: OrderserviceService,
    private userService: UserService,
    private productService: ProductService
  ) { }

  profile: ProfileComponent[] = [];
  ocultar = false;
  userHistory: ordersModel[] = [];
  iduser = localStorage.getItem('iduser');

  ngOnInit(): void {
    if (localStorage.getItem('reload') == 'false') {
      location.reload();
      localStorage.setItem('reload', 'true');
    }
    this.orderService.getOrder().subscribe((res: any) => {
      res.forEach((e: ordersModel) => {
        e.show = false;
        if (e.user_id == this.iduser) {
          this.userHistory.push(e);
        }
      });
      this.userHistory.forEach((a: ordersModel) => {
        a.items.forEach((b: items) => {
          this.productService.getProductById(b.product_id).subscribe((res: any) => {
            b.productDetail = res;
          })
        })
      })
    });
    this.userService.getProfile(this.iduser!).subscribe((res: any) => {
      this.profile = res;
    })
  }
  mostrar() {
    this.ocultar ? (this.ocultar = false) : (this.ocultar = true);
  }

  onClickToggleButton(order: ordersModel) {
    order.show = !order.show;
  }
}
