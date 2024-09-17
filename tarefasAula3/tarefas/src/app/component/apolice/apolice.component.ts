import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.css'
})
export class ApoliceComponent {
  onSubmit(form: NgForm) {
    console.log(form.value)
  }
}
