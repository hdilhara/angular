import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() count;
  @Output() newcomment = new EventEmitter();
  comment;


  constructor() {
    console.log(this.count);
   }

  ngOnInit(): void {
  }

  onNewComment(){
    this.newcomment.emit(this.comment);
    this.comment = '';
  }

}
