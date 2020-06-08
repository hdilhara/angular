import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';


@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
/**
 * this is how build without Form Builder class
 * we use FormBuilder class to clean code to build a form
 */
  //   contactForm = new FormGroup({
  //     account : new FormGroup({
  //       username : new FormControl('',[Validators.required,Validators.minLength(5)], this.uniqueUsername ),
  //       password : new FormControl('',this.cannotContainSpace)
  //     })
  // });

  contactForm: FormGroup;

  constructor(fb: FormBuilder){
    this.contactForm = fb.group({
      account : fb.group({
        username : ['', [Validators.required, Validators.minLength(5)], this.uniqueUsername],
        password : ['', this.cannotContainSpace]
      })
    });
  }
  get username(){
    return this.contactForm.get('account.username');
  }
  get password(){
    return this.contactForm.get('account.password');
  }

  // custom validation
  cannotContainSpace(control: AbstractControl): ValidationErrors | null{
    if ((control.value as string).indexOf(' ') >= 0){
      return {cannotContainSpace : true};
    }
    return null;
  }


  // async validations
  uniqueUsername(c: AbstractControl): Promise< ValidationErrors | null >{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (c.value === 'thilina') {
          resolve({uniqueUsername : true});
        }
        else {
          resolve(null);
        }
      }, 2000 );
    });

  }

  onSubmit(){
    this.contactForm.setErrors({invalidUser : true});
  }



  ngOnInit(): void {
  }

}
