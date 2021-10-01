import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  private historico: Array<string> = [];
  private expresion: string = '';

  constructor() { }

  setExpresion(expressao: string): void {
    this.expresion = this.expresion + expressao;
  }

  getExpresion(): string {
    return this.expresion;
  }

  setType(type: string) {
    this.expresion = type + this.expresion;
  }

  adicionarAoHistorico(): void {
    this.historico.push(this.expresion);
    this.expresion = '';
  }

  getHistorico(): Array<string> {
    return this.historico;
  }

  limparHistorico(): void {
    this.historico = [];
  }

}