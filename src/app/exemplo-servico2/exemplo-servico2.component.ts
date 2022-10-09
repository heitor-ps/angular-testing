import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-servico2',
  templateUrl: './exemplo-servico2.component.html',
  styleUrls: ['./exemplo-servico2.component.css']
})
export class ExemploServico2Component {

  descricao = '';

  adicionarProduto() {
    console.log(`${this.descricao} foi adicionada ao produto`)
  }

}
