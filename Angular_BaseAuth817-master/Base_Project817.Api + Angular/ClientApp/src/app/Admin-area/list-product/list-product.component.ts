import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/Services/Product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(
    private productService:ProductService,
    private spinner:NgxSpinnerService) { }
  listOfData:Product[]=[];
  ngOnInit(
  ) {
this.spinner.show();
this.productService.getAllProducts().subscribe(data=>{
  console.log(data);
    this.listOfData=data;
    this.spinner.hide();
})
  }

}
