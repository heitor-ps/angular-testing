import { Component, OnInit } from '@angular/core';
import { LoggersService } from '../loggers.service';

@Component({
  selector: 'app-exemplo-servico2',
  templateUrl: './exemplo-servico2.component.html',
  styleUrls: ['./exemplo-servico2.component.css']
})
export class ExemploServico2Component {
  descricao = '';

  constructor(public logger: LoggersService) {}

  adicionarProduto() {
    this.logger.logar(`${this.descricao} foi adicionada ao produto`)
  }

}
