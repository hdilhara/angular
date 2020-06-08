import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  backEndService;

  constructor(backEndService: ServiceService) {

    this.products = backEndService.product;
    this.backEndService = backEndService;

  }

  ngOnInit(): void {
  }

  onChangeStock(val){
    this.backEndService.changeStockVal(val);
  }

}
