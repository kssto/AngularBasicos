import  {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
     template :  `
     <h1>{{title}}</h1>
        <h1>La base es</h1> <strong>{{base}}</strong>

        <button (click)="acumular(base)">+1</button>
        <h1>{{numero}}</h1>
        <button (click)="acumular(-base)">-1</button>
            
     `
})
export class ContadorComponent{
    title = 'bases';
    numero : number = 10;
    base : number = 5;
    acumular(valor : number){
      this.numero += valor;
    }
}