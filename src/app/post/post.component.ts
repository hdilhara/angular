import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postService;
  postVals;
  constructor(postService: ServiceService) {
     this.postVals = postService.postDetails;
     this.postService = postService;
   }

  ngOnInit(): void {
  }

  onNewComment(val){
    const details = this.postService.postDetails;
    details.comments++;
    details.allComments[details.allComments.length] = val;

  }
  onLikeClicked(val){
    const details = this.postService.postDetails;
    if (val){
      details.likeCount++;
      details.isLiked = val;
    }
    else{
      details.likeCount--;
      details.isLiked = val;
    }


  }

}
