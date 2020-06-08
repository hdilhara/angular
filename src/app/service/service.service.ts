import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() {
    this.postDetails = {
      name: 'My  Post',
      isLiked: 'false' ,
      likeCount: 54 ,
      comments : 0,
      allComments : []
    };
    const commentsDummy = ['Wow this is so good', 'It\'s really helped me !', 'Thanks a lot'];
    for (let i = 0 ; i < commentsDummy.length ; i++ ){
      this.postDetails.allComments[this.postDetails.allComments.length] = commentsDummy[i];
    }
    this.postDetails.comments = commentsDummy.length;
  }

  // practice 01
  product = [
    {id: 1, product: 'Black Lable', price: 1500, stock: 24},
    {id: 2, product: 'Double Black', price: 2500, stock: 34},
    {id: 3, product: 'Red Lable', price: 1500, stock: 24},
    {id: 4, product: 'Jack Daniels', price: 4500, stock: 35},
    {id: 5, product: 'Vat 69', price: 2700, stock: 17}
  ];

  // practice 02
  postDetails;

  changeStockVal(val){
    for (const prod of this.product){
      if (prod.id == val.id){
        prod.stock = val.stockVal;
        break;
      }
    }
  }
}
