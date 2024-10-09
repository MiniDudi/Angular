import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
  onSubmit(myForm: NgForm) {
    if (myForm.valid)
      alert('Formulário enviado');
  }
}
