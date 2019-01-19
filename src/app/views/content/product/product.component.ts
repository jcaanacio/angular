import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products = [];
  constructor(private _product:ProductService) { }

  ngOnInit() {
    this._product.getProducts().subscribe(
      res => this.products = res.data,
      err => console.log(err)
    );
  }

}
