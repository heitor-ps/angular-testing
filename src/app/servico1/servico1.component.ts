import { Component } from '@angular/core';
import { LoggersService } from '../loggers.service';

@Component({
  selector: 'app-servico1',
  templateUrl: './servico1.component.html',
  styleUrls: ['./servico1.component.css']
})
export class Servico1Component  {
  nome = '';

  constructor(private logger: LoggersService) {}

  adicionarNome() {
    this.logger.logar(`O nome ${this.nome} foi adicionado`);
  }
}
