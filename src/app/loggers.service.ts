import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggersService {
  mensagens:  string[] = [];

  logar(mensagem: string) {
    console.log(mensagem);
    this.mensagens.push(mensagem);    
  }

  exibeTodosOsLogs() {
    console.log(this.mensagens);
  }
}
