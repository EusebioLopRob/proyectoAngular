import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class Info implements OnInit {

  public autor: any = [
    {
      nombre: "Nombre",
      valor: "Eusebio"
    },
    {
      nombre: "Alellidos",
      valor: "López Robledo"
    }
  ];
  public tecnologias: any = [
    {
      nombre: "Node.js",
      valor: "v17.5.0"
    },
    {
      nombre: "TypeScript",
      valor: "v4.5.5"
    },
    {
      nombre: "Angular CLI",
      valor: "v13.2.5"
    },
    {
      nombre: "Express",
      valor: "v4.17.3"
    },
    {
      nombre: "MongoDB",
      valor: "v5.0.5"
    },
    {
      nombre: "Axios",
      valor: "v0.26.0"
    },
    {
      nombre: "Bootstrap",
      valor: "v5.1.3"
    },
    {
      nombre: "Bootstrap Icons",
      valor: "v1.8.1"
    },
    {
      nombre: "jQuery",
      valor: "v3.6.0"
    },
    {
      nombre: "@popperjs/core",
      valor: "v2.11.2"
    },
    {
      nombre: "rxjs",
      valor: "v7.5.0"
    },
    {
      nombre: "tslib",
      valor: "v2.3.0"
    },
    {
      nombre: "zone.js",
      valor: "v0.11.4"
    },
    {
      nombre: "cors",
      valor: "v2.8.5"
    },
    {
      nombre: "mongoose",
      valor: "v6.1.8"
    },
    {
      nombre: "bcrypt",
      valor: "v5.0.1"
    }
  ];
  public directivas: any = [
    {
      nombre: "ngIf",
      valor: "Usada en practicamente todos los componentes (todos los tipos)"
    },
    {
      nombre: "ngStyle",
      valor: "Usada en practicamente todos los componentes"
    },
    {
      nombre: "ngClass",
      valor: "Usada en practicamente todos los componentes"
    },
    {
      nombre: "ngFor",
      valor: "Usada en los componentes Info, Userlist, y Home"
    },
    {
      nombre: "ngSwitch",
      valor: "Usada dos veces en el componente Home"
    },
    {
      nombre: "@Input()",
      valor: "Usado en todos los componentes hijo que reciben datos (muchos)"
    },
    {
      nombre: "@Output()",
      valor: "Usado en todos los componentes hijo que emiten eventos (muchos)"
    }
  ];
  public bibliografia: any = [
    {
      nombre: "Documentación oficial de Angular",
      valor: "https://angular.io/docs"
    },
    {
      nombre: "Stack Overflow para dudas puntuales",
      valor: "https://stackoverflow.com"
    },
    {
      nombre: "Documentación oficial de Bootstrap 5",
      valor: "https://getbootstrap.com/docs/5.1/getting-started/introduction/"
    },
    {
      nombre: "Documentación de JavaScript de W3C",
      valor: "https://www.w3schools.com/js/"
    },
    {
      nombre: "Documentación oficial de Express",
      valor: "https://expressjs.com"
    },
    {
      nombre: "Documentación oficial de MongoDB",
      valor: "https://docs.mongodb.com/launch-manage/"
    },
    {
      nombre: "Documentación oficial de Axios",
      valor: "https://axios-http.com/docs/intro"
    },
    {
      nombre: "Documentación oficial de Mongoose",
      valor: "https://mongoosejs.com/docs/api.html"
    },
    {
      nombre: "NPM: informacion de la librería CORS",
      valor: "https://www.npmjs.com/package/cors"
    },
    {
      nombre: "Material de apuntes de clase",
      valor: ""
    },
  ];

  public content: any = [
    {
      nombre: 'Autor',
      contenido: this.autor
    },
    {
      nombre: 'Tecnologías y librerías',
      contenido: this.tecnologias
    },
    {
      nombre: 'Directivas',
      contenido: this.directivas
    },
    {
      nombre: 'Bibliografía',
      contenido: this.bibliografia
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
