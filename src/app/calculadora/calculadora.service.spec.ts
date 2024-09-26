import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('Sumar', function () {
  it('10 + 15 debe ser 25', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.sumar(10, 15)).toBe(25);
    }
  ));
  it('10.5 + 15.5 debe ser 26', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.sumar(10.5, 15.5)).toBe(26);
    }
  ));
});

describe('Restar', function () {
  it('2 - 2 debe ser 0', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.restar(2, 2)).toBe(0);
    }
  ));
  it('3 - 4 debe ser -1', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.restar(3, 4)).toBe(-1);
    }
  ));
});

describe('Multiplicar', function () {
  it('2 * 2 debe ser 4', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.multiplicar(2, 2)).toBe(4);
    }
  ));
  it('10 * -2 debe ser -20', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.multiplicar(10, -2)).toBe(-20);
    }
  ));
});

describe('Dividir', function () {
  it('2 dividido por 2 debe ser 1', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.dividir(2, 2)).toBe(1);
    }
  ));
  it('6 dividido por 0 debe generar una Excepción', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(function () {
        service.dividir(6, 0);
      }).toThrowError(Error, 'División por cero');
      expect(function () {
        service.dividir(6, 0);
      }).toThrowError('División por cero');
      expect(function () {
        service.dividir(6, 0);
      }).toThrowError(Error);
      expect(function () {
        service.dividir(6, 0);
      }).toThrowError(/División por cero/);
    }
  ));
});

//Para calcular la raíz cuadrada
describe('Raiz Cuadrada', function () {
  it('Raiz cuadrada de 9 debe ser 3', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.raizCuadrada(9)).toBe(3);
    }
  ));
  it('Raiz cuadrada de 25 debe ser 5', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.raizCuadrada(25)).toBe(5);
    }
  ));
  //test con base negativa
  it('Raiz cuadrada de -9 debe ser NaN', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.raizCuadrada(-9)).toBeNaN();
    }
  ));
  //teste con numero decimal
  it('Raiz cuadrada de 0.25 debe ser 0.5', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.raizCuadrada(0.25)).toBe(0.5);
    }
  ));
  //teste con cero
  it('Raiz cuadrada de 0 debe ser 0', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.raizCuadrada(0)).toBe(0);
    }
  ));
});

//Para calcular la potencia
describe('Potencia', function () {
  it('2 elevado a 3 debe ser 8', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.potencia(2, 3)).toBe(8);
    }
  ));
  it('5 elevado a 0 debe ser 1', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.potencia(5, 0)).toBe(1);
    }
  ));
  it('0 elevado a 5 debe ser 0', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.potencia(0, 5)).toBe(0);
    }
  ));
  it('0 elevado a 0 debe ser 1', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.potencia(0, 0)).toBe(1);
    }
  ));
  //test con exponente negativo
  it('2 elevado a -3 debe ser 0.125', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.potencia(2, -3)).toBe(0.125);
    }
  ));
  //test con base negativa y exponente par
  it('(-2) elevado a 2 debe ser 4', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.potencia(-2, 2)).toBe(4);
    }
  ));
  //test con base decimal
  it('2.5 elevado a 2 debe ser 6.25', inject(
    [CalculadoraService],
    (service: CalculadoraService) => {
      expect(service.potencia(2.5, 2)).toBe(6.25);
    }
  ));
});