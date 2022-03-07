import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import {ActivatedRoute, NavigationEnd, Route, Router} from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  constructor( public catalogueService : CatalogueService, public route: ActivatedRoute, public router : Router) { }
  ngOnInit(): void {
      this.getProducts( '/products');
    }

  private getProducts(url : string){
    console.log(url)
    this.catalogueService.getResource(url)
    .subscribe(data => {
      this.products = data;
    }, error => console.log(error))
}
}
