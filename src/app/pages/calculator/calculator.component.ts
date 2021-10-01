import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HistoricoService } from 'src/app/services/historico.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent  {
  valorVisor: string = '0';
  ventanaLimpia: boolean = false;
  operacion: string = '';
  valores: Array<number> = [0, 0];
  indiceAtual: number = 0;
  ultimaExpresion: string = '';
  nuevoValor= 0;
  constructor(private historicoService: HistoricoService) { }

  ngOnInit(): void {
    
  }

  limpiarVentana() {
    this.valorVisor = '0';

  }

  resetar(){
    this.valorVisor ='0';
    this.ventanaLimpia = false;
    this.operacion = '';
    this.valores = [0,0];
    this.indiceAtual = 0;
    this.ultimaExpresion = '';
  }

  adicionarDigito(digito: string) {
    const ventanaLimpia: boolean = this.valorVisor == '0' || this.ventanaLimpia;
    const valorAtual: string = ventanaLimpia ? '' : this.valorVisor;
    this.valorVisor = valorAtual + digito;
    this.ventanaLimpia = false;

    const nuevoValor: number = parseInt(this.valorVisor, 2);
    console.log(nuevoValor);
    this.valores[this.indiceAtual] = nuevoValor;
  }

  executaoperacion(operacion: string): number{
    switch (operacion) {
      case '+':
        return this.valores[0] + this.valores[1];
      case '-': 
        return this.valores[0] - this.valores[1];
      /* case '*':  
        return this.valores[0] * this.valores[1];
      case '/':
        return this.valores[0] / this.valores[1]; */
    }

    return 0;
  }


  agregarOperacion(operacion: string) {
    if (this.indiceAtual == 0) {

      this.operacion = operacion;
      this.indiceAtual = 1;
      this.ventanaLimpia = true;
      this.historicoService.setExpresion(this.valores[0].toString(2) + operacion);

    } else {

      const operacionAtual = this.operacion;

      this.ventanaLimpia = true;
      this.historicoService.setExpresion(this.valores[1].toString(2) + operacion);
      this.valores[0] = this.executaoperacion(operacionAtual);
      this.valores[1] = 0;

      const igual = operacion === '=';
      this.valorVisor = this.valores[0].toString(2);
      this.operacion = igual ? '' : this.operacion;
      this.indiceAtual = igual ? 0 : 1;
      if(igual) {
        this.ultimaExpresion = this.historicoService.getExpresion();
        this.historicoService.setExpresion(this.valores[0].toString(2));
        this.historicoService.setType('Calculadora Binaria: ');
        this.historicoService.adicionarAoHistorico();
      }

    }
  }

}