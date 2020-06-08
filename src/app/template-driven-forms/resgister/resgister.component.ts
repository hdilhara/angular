import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.css']
})
export class ResgisterComponent implements OnInit {

  countries = [{id: 'SL', country: 'Sri Lanka'}, {id: 'IND', country: 'India'}, {id: 'AUS', country: 'Austrailia'}, {id: 'CAN', country: 'Canada'}];
  intrests = [{id: 0, type: 'sport'}, {id: 1, type: 'watch TV'}, {id: 2, type: 'play games'}, {id: 3, type: 'reading'}];
  isEmailMatched = false;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(val){
    console.log(val.value);
    alert('Form submited success');
  }

  confirmEmail(confirm, email){
    if (confirm.touched && email.dirty && confirm.value != email.value ){
      this.isEmailMatched = false;
    }
    else {
    this.isEmailMatched = true;
    }
    return !this.isEmailMatched;
  }
}
