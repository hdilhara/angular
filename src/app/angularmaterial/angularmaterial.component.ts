import { AppDialog } from './dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-angularmaterial',
  templateUrl: './angularmaterial.component.html',
  styleUrls: ['./angularmaterial.component.css']
})
export class AngularmaterialComponent  {
  color = 'primary';
  mode = 'determinate';
  value = 50;

  constructor(private dialogBox: MatDialog){

  }

  dialogOpen(){
    this.dialogBox.open(AppDialog);
  }
  

}
