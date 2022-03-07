import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '.././catalogue.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {

  products : any;

  constructor(public catalogueService : CatalogueService, public route: ActivatedRoute, public router : Router){}


  ngOnInit(): void {
    this.getProducts('/categories/3/products');
  }

  
  private getProducts(url : string){
    console.log(url)
    this.catalogueService.getResource(url)
    .subscribe(data => {
      this.products = data;
    }, error => console.log(error))
}

}
