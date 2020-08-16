import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;

  constructor() {
    this.titulo = 'Peliculas!';
    console.log('1');
  }

  ngOnInit() {
    console.log('2');
  }

  ngDoCheck() {
    console.log('3');
  }
  cambiarTitulo() {
    this.titulo = 'Otro titulo';
  }
  ngOnDestroy() {
    console.log('El componente se va a eliminar');
  }
}
