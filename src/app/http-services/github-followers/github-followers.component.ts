import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  perform = false;
user = 'mosh-hamedani';
accountUrl: string;
followers = [];
errors = null;
userDetails = {
  uname: '',
  name: '',
  from: '',
  followerUrl: '',
  avertar: ''
};

  constructor( private http: HttpClient) { }


  ngOnInit(): void {
  }

  getDetails(username: string){

     this.cleraFollowers();
     this.accountUrl = 'https://api.github.com/users/' + username;
     console.log(this.accountUrl);
     this.getUserDetails();
  }

  getUserDetails(){
    this.http.get(this.accountUrl)
    .subscribe(
      (res: Response) => {
        this.userDetails.uname = res.login;
        this.userDetails.from = res.location;
        this.userDetails.name = res.name;
        this.userDetails.avertar = res.avatar_url;
        this.userDetails.followerUrl = res.followers_url;
        this.perform = true;
        this.getFollowerDetails();
        this.errors = null;
      } , error => {
        this.errors = true;
        throw error;

      }
    );
  }

  getFollowerDetails(){
    console.log(this.userDetails.followerUrl);
    this.http.get(this.userDetails.followerUrl)
        .subscribe(
      res => {
        for (const a in res){
          this.followers.push(res[a]);
        }
        console.log(this.followers);
      }
    );
  }
  cleraFollowers(){
    this.followers = [];
  }

}
