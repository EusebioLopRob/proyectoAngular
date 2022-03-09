import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class Cuenta implements OnInit {

  constructor(private userService: UserService) { }
  public user: Usuario = new Usuario("","","",true,"","","","");


  ngOnInit(): void {
    this.userService.getUser(sessionStorage['idUser']).then((response)=>{
      let responseData = response.data;
      this.user.id = responseData.data._id;
      this.user.username = responseData.data.username;
      this.user.password = responseData.data.password;
      this.user.admin = responseData.data.admin;
      this.user.nombre = responseData.data.nombre;
      this.user.apellido = responseData.data.apellido;
      this.user.nif = responseData.data.nif;
      this.user.email = responseData.data.email;
      //console.log(this.user)
    }).catch((err)=>{
      console.log(err);
    });
  }

  logout(){
    sessionStorage.clear();
    window.location.pathname = "";
  }
}
