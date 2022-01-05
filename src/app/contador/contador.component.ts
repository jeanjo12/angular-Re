import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
  <h1>Bienvenido al {{ title }}</h1>
 <h3>
 La Base Es: <strong> {{ base }} </strong>
</h3>

<!-- Contador con Angular -->
<button (click)="acumular(base)">+ {{ base }}</button>
<span> {{ numero }} </span>
<button (click)="acumular(-base)">- {{ base }}</button>
  
  `,
})
export class contadorComponent {
  title: string = 'Curso Angular contador';
  numero: number = 10;
  base: number = 5;

  acumular(val: number) {
    this.numero += val;
  }
}
