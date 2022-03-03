import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Proyecto Angular de Eusebio López Robledo';
  name: string = "Eusebio López Robledo";
  mail: string = "eusebio.lopez.robledo.alu@iesjulioverne.es";
  company: string = "I.E.S. Julio Verne - Sevilla";
  
  idnuevoUser = null;
  getAllUsers(){
    console.log(this.idnuevoUser)
    let api = "http://localhost:8091/user/data";
    axios.get(api)
      .then( (response) => {
        console.log(response);
      }).catch(err=>{
        console.log(err);
      });
  }
  getUser(){
    console.log(this.idnuevoUser)
    let api = `http://localhost:8091/user/data/${this.idnuevoUser || "000000000000000000000000"}`;
    axios.get(api)
      .then( (response) => {
        console.log(response);
      }).catch(err=>{
        console.log(err);
      });
  }
  createUser(){
    console.log(this.idnuevoUser)
    let api = "http://localhost:8091/user/create";
    let nuevoUser = {
      username: "usuario",
      password: "usuario"
    }
    axios.post(api, nuevoUser)
      .then( (response) => {
        console.log(response);
        let respuesta = response.data;
        this.idnuevoUser = respuesta.data._id;
      }).catch(err=>{
        console.log(err);
      });
  }
  updateUser(){
    console.log(this.idnuevoUser)
    let api = `http://localhost:8091/user/update/${this.idnuevoUser || "000000000000000000000000"}`;
    let updateUser = {
      password: "usuario2"
    }
    axios.put(api, updateUser)
      .then( (response) => {
        console.log(response);
      }).catch(err=>{
        console.log(err);
      });
  }
  deleteUser(){
    console.log(this.idnuevoUser)
    let api = `http://localhost:8091/user/delete/${this.idnuevoUser || "000000000000000000000000"}`;
    axios.delete(api)
      .then( (response) => {
        console.log(response);
      }).catch(err=>{
        console.log(err);
      });
  }
}
