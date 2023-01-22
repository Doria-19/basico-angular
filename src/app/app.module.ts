import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contadores/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroeModulo } from './heroes/heroes.modulo';
import { ContadorModulo } from './contadores/contador.modulo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroeModulo,
    AppRoutingModule,
    ContadorModulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
