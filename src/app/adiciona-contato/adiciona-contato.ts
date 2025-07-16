import { Component } from '@angular/core';
import { Contato } from './contato';

@Component({
  selector: 'app-adiciona-contato',
  imports: [],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss'
})
export class AdicionaContato {
  contatos: Contato[]

  constructor() {
    this.contatos = []
  }

   adicionar(nm: string, em: string) {
     const novo = new Contato(nm)
     this.contatos.push(novo)
   }
}
