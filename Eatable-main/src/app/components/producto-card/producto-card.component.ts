import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent {
  @Input() productName!: string;
  @Input() productPill!: number;
  @Input() imgProduct!: string;
  @Input() idProduct!: string;
}
