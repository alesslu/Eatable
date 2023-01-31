import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { productoModel } from 'src/app/models/productoModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  showNavbar: boolean = true;
  search!: any;

  ProductList: productoModel[] = [];
  filteredProducts: productoModel[] = [];
  categories: string[] = ["Peruana", "Mexicana", "Italiana", "Argentina", "Snacks"]

  constructor(
    private productService: ProductService
  ) { }

  onChange() {
    this.filteredProducts = this.ProductList.filter((product: productoModel) => {
      const regex = new RegExp(this.search.toLowerCase())
      return regex.test(product.name.toLowerCase())
    })
    this.showNavbar = this.filteredProducts.length === this.ProductList.length
  }

  filterByCategory(category: string) {
    this.filteredProducts = this.ProductList.filter((product: productoModel) => category === product.category)
  }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (res: productoModel[]) => {
        this.ProductList = res;
        this.filteredProducts = res;
      },
      error: () => {
        this.ProductList = [];
      },
    });
  }
}

