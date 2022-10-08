import { Component } from '@angular/core';

@Component({
  selector: 'app-servico1',
  templateUrl: './servico1.component.html',
  styleUrls: ['./servico1.component.css']
})
export class Servico1Component  {
  nome = '';

  adicionarNome() {
    console.log(`o nome ${this.nome} foi adicionado`)
  }
}
