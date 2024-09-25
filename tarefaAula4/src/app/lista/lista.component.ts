import { Component } from '@angular/core';

export interface Tarefa {
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent {
  tarefas: Tarefa[] = [
    { descricao: 'Tarefa 1', concluida: false },
    { descricao: 'Tarefa 2', concluida: false },
    { descricao: 'Tarefa 3', concluida: false },
    { descricao: 'Tarefa 4', concluida: false },
    { descricao: 'Tarefa 5', concluida: false },
  ]

  ativar(tarefa: Tarefa) {
    if (tarefa.concluida) {
      tarefa.concluida = false;
    } else {
      tarefa.concluida = true;
    }
  }
}
