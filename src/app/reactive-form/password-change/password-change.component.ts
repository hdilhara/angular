import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  passForm: FormGroup;
  constructor(fb: FormBuilder) {
      this.passForm = fb.group({
        username: ['', Validators.required],
        password: fb.group({
          oldPassword : ['', Validators.required],
          newPassword : [],
          confirmPassword : []
        })
      });
   }

  ngOnInit(): void {
  }

}
