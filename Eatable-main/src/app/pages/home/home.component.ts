import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { Plato } from 'src/app/models/plato.model';
import { PlatoService } from 'src/app/services/plato.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  showNavbar: boolean = true;
  search!: any;

  PlatoList: Plato[] = [];
  filteredPlatos: Plato[] = [];
  categories: string[] = ["Peruana", "Mexicana", "Italiana", "Argentina", "Snacks"]

  onChange(){
    this.filteredPlatos = this.PlatoList.filter((plato: Plato) =>{
      const regex = new RegExp(this.search.toLowerCase())
      return regex.test(plato.name.toLowerCase())
    })
    this.showNavbar = this.filteredPlatos.length === this.PlatoList.length
  }

  filterByCategory(category: string){
    this.filteredPlatos = this.PlatoList.filter((plato: Plato) => category === plato.category)
  }

  constructor(private PlatoService: PlatoService) {}
  ngOnInit() {
    this.PlatoService.getDishes().subscribe({
      next: (res: Plato[]) => {
        this.PlatoList = res;
        this.filteredPlatos = res;
      },
      error: () => {
        this.PlatoList = [];
      },
    });
  }


}
