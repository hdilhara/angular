import { fade, slide, bounce, swing } from './animation';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    fade,
    slide,
    bounce,
    swing
  ]
})
export class TodoComponent implements OnInit {
  headline=true;
  isLoading=true;
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  constructor() { }

  ngOnInit(): void {
  }
  

addItem(input : HTMLInputElement){
  this.isLoading=false;
  this.items.splice(0,0,input.value);
  input.value='';
}
removeItem(index){
  this.isLoading=false;
  this.items.splice(index,1);
}
animateMe(){
  this.headline=!this.headline ;
}

}
