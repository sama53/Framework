import { Component } from '@angular/core';
import { Recommended } from "../recommended/recommended";

@Component({
  selector: 'app-products',
  imports: [Recommended],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

}
