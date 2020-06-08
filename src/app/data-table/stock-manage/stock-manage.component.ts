import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  stockVal;
  @Input('stock-value') currentStockVal;
  @Input('product-id') productId;
  @Output('changed-stock-value') changeStockVal = new EventEmitter();
  isOk = false;

  constructor() { }

  ngOnInit(): void {
    this.buttonColor(this.currentStockVal);
  }

  buttonColor(val){
    if (val > 24){
      this.isOk = true;
    }
    else{
      this.isOk = false;
    }
  }

  changeStock(){
    if (typeof this.stockVal == 'number' && this.stockVal > 0){
      const changeStockObj = {
        id: this.productId,
        stockVal: this.stockVal
      };
      this.changeStockVal.emit(changeStockObj);
      this.buttonColor(this.stockVal);
      this.stockVal = '';
    }
    else{
      alert('Invalid value!');
      this.stockVal = '';
    }
  }

}
