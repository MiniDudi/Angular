import { Component } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { NgForm } from '@angular/forms';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {

  alunos: Aluno[] = [];
  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunoService.obterAlunos().subscribe({
      next: alunos => {
        this.alunos = alunos;
        console.log(this.alunos);
      },
      error: error => {
        console.error("Erro ao carregar alunos:", error);
      }
    });
  }

  getAlunoById(form: NgForm) {
    console.log(form.value.id);
    this.alunoService.obterAlunoPorId(form.value.id).subscribe({
      next: aluno => {
        console.log(aluno);
      },
      error: error => {
        console.error("Erro ao carregar aluno:", error);
      }
    });
  }

  cadastrarAluno(form: NgForm) {
    console.log(form.value);
    this.alunoService.salvarAluno(form.value).subscribe({
      next: aluno => {
        console.log(aluno);
      },
      error: error => {
        console.error("Erro ao salvar aluno:", error);
      }
    });
  }

  apagarAluno(form: NgForm) {
    console.log(form.value.id);
    this.alunoService.excluirAluno(form.value).subscribe({
      next: aluno => {
        console.log(aluno);
      },
      error: error => {
        console.error("Erro ao excluir aluno:", error);
      }
    });
  }

  editarAluno(form: NgForm) {
    console.log(form.value);
    this.alunoService.editarAluno(form.value).subscribe({
      next: aluno => {
        console.log(aluno);
      },
      error: error => {
        console.error("Erro ao editar aluno:", error);
      }
    });
  }

}
