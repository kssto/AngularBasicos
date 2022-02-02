import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

  constructor() { }

  
  heroes: string []= ['spiderman', 'ironman','capitanAmerica'] ;
  heroeBorrado: string ='';
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
