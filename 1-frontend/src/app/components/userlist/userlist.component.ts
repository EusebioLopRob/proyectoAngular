import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class Userlist implements OnInit {

  userlist: any = []

  constructor() { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    let api = "http://localhost:8091/user/data";
    axios.get(api)
      .then( (response) => {
        let respuesta = response.data.data;
        respuesta.forEach((element: { username: string; password: string; }) => {
          let instancia = new Usuario(element.username,element.password)
          this.userlist.push(instancia);
        });
      }).catch(err=>{
        console.log(err);
      });
  }
}
