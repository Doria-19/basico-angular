import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
 heroes: string [] = ['Batman','Superman','Green Arrow','Flash','Black Adam'];
 borrados: string='';
 borrarHeroe(){
 this.borrados = this.heroes.shift()||'';
 
 }

}
