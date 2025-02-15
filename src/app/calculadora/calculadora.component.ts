import { Component } from '@angular/core';
import { CalculadoraService } from './calculadora.service';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  private numero1: string = '';
  private numero2: any = '';
  private resultado: any = 0;
  private operacion: any = '';
  private calculadoraService: CalculadoraService;

  constructor() {
    this.calculadoraService = new CalculadoraService();
  }
  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  }
  limpiar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacion = null;
  }
  ngOnInit() {
    this.limpiar();
  }
  AdicionarNumero(numero: string): void {
    if (this.operacion === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }
  concatenarNumero(numAtual: string, numConcat: string): string {
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }
    return numAtual + numConcat;
  }
  definirOperacion(operacion: string): void {
    //Soporte para números negativos
    if (this.numero1 == '0' && operacion == '-' && this.operacion == null) {
      this.numero1 = this.concatenarNumero('', '-');
    } else if (
      this.operacion !== null &&
      this.numero2 == null &&
      operacion === '-'
    ) {
      this.numero1 = this.concatenarNumero('', '-');
    } else if (this.operacion === null) {
      this.operacion = operacion;
      return;
    }
    if (this.numero2 !== null) {
      this.calcular();
      this.operacion = null;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }
  calcular(): void {
    if (this.numero2 === null && this.operacion !== 'r') {
      return;
    }
    if (this.operacion === 'r') {
      this.resultado = this.calculadoraService.raizCuadrada(parseFloat(this.numero1));
    } else {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacion
      );
    }
  }
}