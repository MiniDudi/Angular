import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  submitted: Boolean = false;
  user!: String;
  password!: String;

  onSubmit(form: NgForm) {
    if( form.value.user && form.value.password) {
      this.submitted = true;
      this.user = form.value.user;
      this.password = form.value.password;
    } else {
      this.submitted = false;
    }
  }
}
