import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { ConditonalhighlightDirectiveDirective } from '../../directives/conditonalhighlight-directive.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-daytwo-component',
  standalone: true,
  imports: [HighlightDirective,ConditonalhighlightDirectiveDirective,CommonModule,FormsModule],
  templateUrl: './daytwo-component.component.html',
  styleUrl: './daytwo-component.component.css'
})
export class DaytwoComponentComponent {
  isVisible: boolean = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  products = [ { name: 'Laptop', price: 1200, available: true }, { name: 'Smartphone', price: 800, available: true }, { name: 'Headphones', price: 100, available: false }, { name: 'Camera', price: 600, available: true }, { name: 'Tablet', price: 300, available: false }, { name: 'Fitness Tracker', price: 50, available: true }, { name: 'Bluetooth Speaker', price: 80, available: true }, { name: 'Gaming Console', price: 400, available: false }, { name: 'Smartwatch', price: 150, available: true }, { name: 'External Hard Drive', price: 120, available: true }, ]
   searchTerm: string = '';

  constructor() {}

  filterProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
