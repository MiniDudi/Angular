import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.css']
})
export class ApoliceComponent {
  valorApolice: number | null = null;

  onSubmit(form: NgForm) {
    const { nome, sexo, idade, valorAuto } = form.value;
    
    if (sexo === 'masculino') {
      this.valorApolice = idade <= 25 ? valorAuto * 0.15 : valorAuto * 0.10;
    } else if (sexo === 'feminino') {
      this.valorApolice = valorAuto * 0.08;
    }
  }
}
