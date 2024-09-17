import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  clientes: Cliente[] = [];

  onSubmit(form: NgForm) {
    const novoCliente = new Cliente(
      form.value.id,
      form.value.nome,
      form.value.email,
      form.value.idade
    );

    this.clientes.push(novoCliente);
    form.reset();

    return this.clientes;
  }
}
