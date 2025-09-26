import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface NotasResultado {
  promedio: number;
  aprobados: number;
  reprobados: number;
  notaMasAlta: number;
  notaMasBaja: number;
  totalNotas: number;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Datos personales del estudiante
  nombreCompleto = 'Oscar Armando Tot Caal';
  numeroCarne = '1690-21-14978';
  
  // Formulario
  notasInput = '';
  resultado: NotasResultado | null = null;
  error = '';

  procesarNotas() {
    console.log('procesarNotas llamado!', this.notasInput);
    this.error = '';
    this.resultado = null;

    if (!this.notasInput.trim()) {
      this.error = 'Por favor ingrese las notas';
      return;
    }

    try {
      // Procesar las notas ingresadas
      const notasTexto = this.notasInput.split(',').map(n => n.trim()).filter(n => n !== '');
      const notas: number[] = [];

      // Validar cada nota
      for (const notaTexto of notasTexto) {
        const nota = parseFloat(notaTexto);
        if (isNaN(nota)) {
          this.error = `"${notaTexto}" no es un número válido`;
          return;
        }
        if (nota < 0 || nota > 100) {
          this.error = `La nota ${nota} debe estar entre 0 y 100`;
          return;
        }
        notas.push(nota);
      }

      if (notas.length === 0) {
        this.error = 'No se ingresaron notas válidas';
        return;
      }

      // Calcular estadísticas
      const promedio = notas.reduce((sum, nota) => sum + nota, 0) / notas.length;
      const aprobados = notas.filter(nota => nota > 60).length;
      const reprobados = notas.length - aprobados;
      const notaMasAlta = Math.max(...notas);
      const notaMasBaja = Math.min(...notas);

      this.resultado = {
        promedio: Math.round(promedio * 100) / 100,
        aprobados,
        reprobados,
        notaMasAlta,
        notaMasBaja,
        totalNotas: notas.length
      };

    } catch (error) {
      this.error = 'Error al procesar las notas';
    }
  }

  limpiarFormulario() {
    console.log('limpiarFormulario llamado!');
    this.notasInput = '';
    this.resultado = null;
    this.error = '';
  }
}
