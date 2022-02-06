import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts-component.component.html',
  styleUrls: ['./product-alerts-component.component.css'],
})
export class ProductAlertsComponentComponent implements OnInit {
  @Input() product!: Product;

  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
