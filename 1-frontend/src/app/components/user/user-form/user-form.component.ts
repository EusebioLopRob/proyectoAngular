import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UserService } from '../../../services/user.service';
import { Modal } from "bootstrap";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserForm implements OnInit {

  @Input() mode: string | undefined
  @Input() sentUser: Usuario | undefined
  @Output() dologin = new EventEmitter<Object>();
  public user: Usuario = new Usuario("", "", "", false, "", "", "", "");
  public usernameError: string = "";
  public passwordError: string = "";
  public nombreError: string = "";
  public apellidoError: string = "";
  public nifError: string = "";
  public emailError: string = "";
  public letraDni: string[] = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E",];


  public backendReject: string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  login() {
    this.userService.login({ username: this.user.username, password: this.user.password }).then((response) => {
      let datosRespuesta = response.data
      this.dologin.emit(datosRespuesta.data);
      if (datosRespuesta.code == 3000) {
        this.backendReject = datosRespuesta.message;
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  onSubmit(f: NgForm) {
    this.backendReject = "";
    this.usernameError = "";
    this.passwordError = "";
    this.nombreError = "";
    this.apellidoError = "";
    this.nifError = "";
    this.emailError = "";
    if (this.validarForm(f)) {
      switch (this.mode) {
        case 'add':
          let dataSchema1 = {
            username: this.user.username,
            password: this.user.password,
            admin: this.user.admin == true || this.user.admin == "true" ? true : false,
            nombre: this.user.nombre,
            apellido: this.user.apellido,
            nif: this.user.nif,
            email: this.user.email
          }
          this.userService.createUser(dataSchema1).then((response) => {
            if (response.data.code == 2000) {
              this.closeModal("modalAddUser");
              window.location.pathname = "admin";
            } else {
              this.backendReject = response.data.message;
            }
          }).catch((err) => {
            console.log(err);
          });
          break;
        case 'edit':
          if (this.sentUser) {
            let dataSchema2 = {
              username: this.sentUser.username,
              password: this.sentUser.password,
              admin: this.sentUser.admin == true || this.sentUser.admin == "true" ? true : false,
              nombre: this.sentUser.nombre,
              apellido: this.sentUser.apellido,
              nif: this.sentUser.nif,
              email: this.sentUser.email
            }
            this.userService.updateUser(this.sentUser.id, dataSchema2).then((response) => {
              if (response.data.code == 2000) {
                this.closeModal("modalEditUser");
                window.location.pathname = "admin";
              } else {
                this.backendReject = response.data.message;
              }
            })
          }
          break;
        case 'login':
          this.login();
          break;
      }
    }
  }

  closeModal(id: string) {
    let modalElelent: any = document.getElementById(id);
    let modal: any = Modal.getInstance(modalElelent);
    modal.hide();
  }

  validarForm(f: NgForm): boolean {
    let valid: boolean = true;
    if (f.controls['username'].status == 'INVALID') {
      valid = false;
      this.usernameError = "Debe introducir un nombre de usuario";
    }
    if (f.controls['pass'].status == 'INVALID') {
      valid = false;
      if (f.controls['pass'].hasError("pattern")) {
        this.passwordError = "Debe introducir una contraseña de 4 o más caracteres";
      } else {
        this.passwordError = "Debe introducir una contraseña";
      }
    }
    if (this.mode!='login' && f.controls['nombre'].status == 'INVALID') {
      valid = false;
      this.nombreError = "Debe introducir un nombre";
    }
    if (this.mode!='login' && f.controls['apellido'].status == 'INVALID') {
      valid = false;
      this.apellidoError = "Debe introducir un apellido";
    }
    if (this.mode!='login' && f.controls['nif'].status == 'INVALID') {
      valid = false;
      if (f.controls['nif'].hasError("pattern")) {
        this.nifError = "Debe introducir 8 numeros y una letra";
      } else if (f.controls['nif'].hasError("incorrectLetter")) {
        this.nifError = "La letra es incorrecta";
      } else {
        console.log(f.controls['nif'])
        this.nifError = "Debe introducir un NIF";
      }
    }
    if (this.mode!='login' && f.controls['email'].status == 'INVALID') {
      valid = false;
      if (f.controls['email'].hasError("required")) {
        this.emailError = "Debe introducir un E-mail";
      } else {
        this.emailError = "Debe introducir una E-mail válido";
      }
    }
    return valid;
  }
  validarNif(f: NgForm) {
    f.controls['nif'].setErrors(null)
    if (this.mode == 'add') {
      if (this.user.nif.length == 9) {
        let nifArray = Array.from(this.user.nif);
        let numArray = nifArray.splice(0, 8);
        let numero = Number.parseInt(numArray.join(""));
        let letraArray = nifArray.splice(0);
        let letra = letraArray[0];
        if (letra.toUpperCase() != this.letraDni[numero % 23]) {
          f.controls['nif'].setErrors({
            incorrectLetter: true
          });
        }
      }
    } else {
      if (this.sentUser && this.sentUser.nif.length == 9) {
        let nifArray = Array.from(this.sentUser.nif);
        let numArray = nifArray.splice(0, 8);
        let numero = Number.parseInt(numArray.join(""));
        let letraArray = nifArray.splice(0);
        let letra = letraArray[0];
        if (letra.toUpperCase() != this.letraDni[numero % 23]) {
          f.controls['nif'].setErrors({
            incorrectLetter: true
          });
        } 
      }
    }
  }
}