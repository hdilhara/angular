import { HttpPostComponent } from './http-post/http-post.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Post } from './post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  mypost: Post;
  postCreateError = false;
  newError = new Subject();

  constructor(private http: HttpClient) {

   }


  getAllPosts(): Observable<Post[]> {
    return this.http.get('https://angular-practice-7ae8c.firebaseio.com/posts.json')
    .pipe(map(res => {
      const arr = [];
      for (const a in res){
        if (res.hasOwnProperty(a)) {
        arr.push({id: a, ...res[a]});
        }
      }
      return arr;
    }));
  }
  createPost(){
    this.http.post('https://angular-practice-7ae8c.firebaseio.com/posts.json', JSON.stringify(this.mypost),
    {
      headers : new HttpHeaders({
        CustomHeader : 'Thilina Dilhara',
        ourParty : 'SL'
      })
    })
      .subscribe(res => {
        console.log(res.isPrototypeOf);
      }, error => {
        this.postCreateError = true;
        this.newError.next('Cant Load the Post');
      } );
  }
  deletePost(id: string) {

    let isDelete = true;
    this.http.delete('https://angular-practice-7ae8c.firebaseio.com/posts/' + id + '.json/')
    .subscribe(res => {
      console.log(res);
    }, error => {
      window.alert('Can\'t Delete post . Something has went wrong! ' );
      isDelete = false;
    });

    return isDelete;
  }


}
