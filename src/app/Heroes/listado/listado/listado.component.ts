import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: 'listado.component.html',
})
export class ListadoComponent {
  heroe: string[] = [
    'Naruto',
    'Goku',
    'Baseball',
    'Batman',
    'Iroman',
    'Spiderman',
  ];

  heroeBorrado: string = '';

  borar() {
    this.heroeBorrado = this.heroe.pop() || '';
  }
}
