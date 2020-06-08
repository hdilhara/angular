import { PostService } from './../post.service';
import { HttpClient } from '@angular/common/http';


import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Subscription, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';



@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.css']
})
export class HttpPostComponent implements OnInit {


  mypost;
  getPostsTriggered = false;
  getPostError = false;
  postCreateError = null;
  isLoading = false;
  postErrorSubscription = new Subscription();
  allPosts = [];

  constructor(private http: HttpClient, private service: PostService) {

    this.mypost = {
      title: 'Hello World!',
      content: 'This is my first interacting with firebase.'
    };
    service.mypost = this.mypost;

  }

  createPost() {
    this.service.createPost();
    if (this.getPostsTriggered){
      this.getPosts();
      this.postCreateError = false;
    }

  }

  getPosts() {
    this.getPostsTriggered = true;
    this.getPostError = false;
    this.isLoading = true;
    this.service.getAllPosts().subscribe(res => {
      this.allPosts = res;
    }, error => {
      this.isLoading = false;
      console.log(error.mesage);
      this.getPostError = true;
    }, () => {
      this.isLoading = false;
    });
  }

  deletePost(id: string){
   if (this.service.deletePost(id)){
     this.getPosts();
   }
  }
  ngOnInit(): void {
    this.postErrorSubscription = this.service.newError.subscribe(
      error => {
        this.postCreateError = true;
       });
  }

  ngOnDestroy(): void {
    this.postErrorSubscription.unsubscribe();
  }

}
