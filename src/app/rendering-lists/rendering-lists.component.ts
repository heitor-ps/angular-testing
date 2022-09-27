import { Component } from '@angular/core';
import { Celular } from '../types/celular';

@Component({
  selector: 'app-rendering-lists',
  templateUrl: './rendering-lists.component.html',
  styleUrls: ['./rendering-lists.component.css']
})
export class RenderingListsComponent {

  celulares: Celular[] = [
    {id: 1, nome: "celular XL", descricao: "celular grande", esgotado: false},
    {id: 2, nome: "celular normal", esgotado: false},
    {id: 3, nome: "celular mini", esgotado: true}
  ];

}
