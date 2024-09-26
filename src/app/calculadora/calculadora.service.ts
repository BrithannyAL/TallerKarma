import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  constructor() {}

  sumar(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
  restar(numero1: number, numero2: number) {
    return numero1 - numero2;
  }
  multiplicar(numero1: number, numero2: number) {
    return numero1 * numero2;
  }
  dividir(numero1: number, numero2: number) {
    if (numero2 === 0) throw new Error('División por cero');
    return numero1 / numero2;
  }

  //Nuevo método para calcular la raíz cuadrada
  raizCuadrada(numero: number) {
    return Math.sqrt(numero);
  }

  //Nuevo método para calcular la potencia de un número
  potencia(numero: number, potencia: number) {
    return Math.pow(numero, potencia);
  }

  calcular(numero1: number, numero2: number, operacion: string) {
    let resultado: number;
    if (numero2 === null) {
      return;
    }
    switch (operacion) {
      case '+':
        resultado = this.sumar(numero1, numero2);
        break;
      case '-':
        resultado = this.restar(numero1, numero2);
        break;
      case '/':
        resultado = this.dividir(numero1, numero2);
        break;
      case 'x':
        resultado = this.multiplicar(numero1, numero2);
        break;
      case 'r':
        resultado = this.raizCuadrada(numero1);
        break;
      case 'p':
        resultado = this.potencia(numero1, numero2);
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
