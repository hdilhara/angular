import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() likeVals;
  @Output() likeCliked = new EventEmitter();
  isLiked;
  likeCount;

  constructor() {
   }

  ngOnInit(): void {
    this.isLiked = this.likeVals.isLiked;
    this.likeCount = this.likeVals.likeCount;
  }

  onClickLike(){
    this.likeCliked.emit(this.isLiked);
    this.isLiked = !this.isLiked;

  }

}
