import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('title') title;
  displayCont = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.displayCont = !this.displayCont;
  }

}
