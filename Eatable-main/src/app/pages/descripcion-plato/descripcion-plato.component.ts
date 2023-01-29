import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatoService } from 'src/app/services/plato.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { Plato } from 'src/app/models/plato.model';


@Component({
  selector: 'app-descripcion-plato',
  templateUrl: './descripcion-plato.component.html',
  styleUrls: ['./descripcion-plato.component.css']
})
export class DescripcionPlatoComponent implements OnInit {

  PlatoActual: Plato = {
    _id: "",
    name: "",
    price: 0,
    category: "",
    description: "",
    picture_url: "",
    quantity: 0,
    __v: 0,
  };
  platoId!: string | null;
  AgreadoAlCarrito!: boolean;
  cartLabel: string = this.AgreadoAlCarrito ? "Added to cart" : "Add to cart";

  constructor(
    private route: ActivatedRoute,
    private platoService: PlatoService,
    private carritoService: CarritoService
  ){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.platoId = params.get('id')
      if (this.platoId) {
        this.platoService.getDishById(this.platoId)
        .subscribe((data) =>{
          this.PlatoActual = data
          this.AgreadoAlCarrito = this.carritoService.PlatoAgreadoAlCarrito(this.PlatoActual._id)
        }
        )
      }
    })
  }

  onClick(){
    this.carritoService.addItemAlCarrito(this.PlatoActual)
    console.log("agregado")
  }
}
