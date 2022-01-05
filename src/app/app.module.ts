import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { contadorComponent } from './contador/contador.component';
import { HeroeComponent } from './Heroes/heroe/heroe.conponent';
import { ListadoComponent } from './Heroes/listado/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    contadorComponent,
    HeroeComponent,
    ListadoComponent,
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
