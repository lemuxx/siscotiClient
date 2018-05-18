import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'siscoti-login',
  templateUrl: './login.component.html'
})

export class LoginComponent{
  formLogin: FormGroup;

  constructor(private frmLogin: FormBuilder){
      this.formLogin = this.frmLogin.group({
        'email': ['', Validators.email],
        'password': ['', Validators.required],
      });
  }

  ngOnInit(){
  }

  login(){
    const frm = this.formLogin.value;
    console.log(frm.email + " " + frm.password);
  }

}
