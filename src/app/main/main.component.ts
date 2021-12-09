import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  nome = "";
  sobrenome = "";
  nascimento = "";
  listsPersons = [];
  ngOnInit() {
  }

  cadastrar() {
    alert("CADASTRO REALIZADO")
    let pessoas = {
      nome : this.nome,
      sobrenome : this.sobrenome,
      nascimento : this.nascimento
    }
    this.listsPersons.push(pessoas);
    this.nome = "";
    this.sobrenome = "";
    this.nascimento = undefined;
  }

  selectPessoa(pessoaDados , indexPessoa){
    this.nome = pessoaDados.nome;
    this.sobrenome = pessoaDados.sobrenome;
    this.nascimento = pessoaDados.nascimento;

    this.listsPersons.splice(indexPessoa, 1);
  }

  deletarPessoa(indexPessoa){
    this.listsPersons[indexPessoa].deleted = true;
  }

  restaurarPessoa(indexPessoa){
    delete this.listsPersons[indexPessoa].deleted;
  }
}
