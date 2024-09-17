import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  resultado: number | null = null;

  onSubmit(form: NgForm) {
    const primeiroNumero = parseFloat(form.value.primeiroNumero);
    const segundoNumero = parseFloat(form.value.segundoNumero);
    const operacao = form.value.operacao;

    if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
      this.resultado = null;
      return;
    }

    switch (operacao) {
      case 'soma':
        this.resultado = primeiroNumero + segundoNumero;
        break;
      case 'subtracao':
        this.resultado = primeiroNumero - segundoNumero;
        break;
      case 'multiplicacao':
        this.resultado = primeiroNumero * segundoNumero;
        break;
      case 'divisao':
        this.resultado = segundoNumero !== 0 ? primeiroNumero / segundoNumero : null;
        break;
      default:
        this.resultado = null;
    }
  }
}
