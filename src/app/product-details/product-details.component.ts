import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //first get  the product id frome  the current route.
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('productId'));

    console.log('get id from route: ', id);

    //find the product with the id in the route
    this.product = products.find((product) => product.id === id);
  }
}
