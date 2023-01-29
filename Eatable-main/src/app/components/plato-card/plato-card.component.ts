import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plato-card',
  templateUrl: './plato-card.component.html',
  styleUrls: ['./plato-card.component.css']
})
export class PlatoCardComponent {
  @Input() productName!: string;
  @Input() productPill!: number;
  @Input() imgProduct!: string;
}
