export class Cliente {
    id: number;
    nome: string;
    email: string;
    idade: number;

    constructor(id: number, nome: string, email: string, idade: number) { 
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }
}
