import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class Header implements OnInit {

  //Variable importada
  @Input() title: string | undefined;

  //Variable para usar un pipe que nos monte un reloj con la fecha
  public hoy: Date = new Date();
  public iconSize: string = "150%";

  constructor() { }

  ngOnInit(): void {
    //Lanzamos un intervalo de 1 segundo para actualizar el reloj
    setInterval(()=>{
      this.hoy = new Date();
    },1000)
  }
}
