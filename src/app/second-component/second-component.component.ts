import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  nome = "Pudim";

  dataNascimento = "1995-01-01"

  urlImage = "/assets/sakura_nene.jpg"


  mostrarDataNascimento() {
    alert(`A data de nascimento do pudim é ${this.dataNascimento}`)
  }
}
