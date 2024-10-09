import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoginFailed: Boolean = false;
  user!: String;
  password!: String;

  constructor(private router: Router) { }

  onSubmit(myForm: NgForm) {


    if (myForm.value.user == 'admin' && myForm.value.password == 123) {
      this.user = myForm.value.user;
      this.password = myForm.value.password;
      this.isLoginFailed = false;

      this.router.navigate(['/home', this.user, this.password]);
    } else {
      this.isLoginFailed = true;
    }
  }
}
