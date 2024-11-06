import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  API_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  obterAlunos():Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.API_URL}/aluno`);
  }

  obterAlunoPorId(id: number):Observable<Aluno> {
    return this.http.get<Aluno>(`${this.API_URL}/aluno/${id}`);
  }

  salvarAluno(produto: Aluno):Observable<Aluno> {
    return this.http.post<Aluno>(`${this.API_URL}/aluno/`, produto);
  }

  editarAluno(produto: Aluno):Observable<Aluno> {
    return this.http.put<Aluno>(`${this.API_URL}/aluno/${produto.id}`, produto);
  }

  excluirAluno(produto: Aluno):Observable<Aluno> {
    return this.http.delete<Aluno>(`${this.API_URL}/aluno/${produto.id}`);
  }
}
