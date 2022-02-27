import { Component } from '@angular/core';

@Component({
      selector: 'app-prueba2',  
      template: `
      <p>{{parrafo}}</p>
      `
})

export class Prueba2Component {
      parrafo: string = "Esto es el componente prueba2"     
}