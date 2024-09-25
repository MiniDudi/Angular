import { Component } from '@angular/core';


@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css'],
})

export class DiretivasComponent {
  exibir: boolean = true;
  items: string[] = ["1", "2", "3", "4", "5", "6"];
  tipoAutomovel: string = 'carro';
  cor: string = 'blue';
  condicao: boolean = true;
  isActive: boolean = false;
}
