import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login implements OnInit {

  constructor() { }
  @Output() dologin = new EventEmitter<Object>();
  ngOnInit(): void {
  }

  login(datos: Object){
    console.log(datos? "Login exitoso":"Login fallido");
    this.dologin.emit(datos);
  }
}