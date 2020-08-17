import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
})
export class MiComponente {
  public titulo: string;
  public comentario: string;
  public year: number;
  public showItems: boolean;

  constructor() {
    this.titulo = 'Hola Mundo, soy mi componente';
    this.comentario = 'Este es mi primer componente';
    this.year = 2020;
    this.showItems = true;
    console.log('Componente mi-componente cargado!!');
  }

  handleItems() {
    this.showItems = !this.showItems;
  }
}
