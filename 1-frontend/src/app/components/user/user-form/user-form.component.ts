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
  public user: Usuario = new Usuario("","","",false);
  public usernameError: string = "";
  public passwordError: string = "";
  public backendReject: string = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  login() {
    this.userService.login({username: this.user.username, password: this.user.password}).then((response)=>{
      let datosRespuesta = response.data
      this.dologin.emit(datosRespuesta.data);
    }).catch((err)=>{
      console.log(err);
    });
  }

  onSubmit(f: NgForm){
    this.backendReject = ""; 
    this.usernameError = "";
    this.passwordError = "";
    if(this.validarForm(f)){
      switch(this.mode){
        case 'add':
          let dataSchema1 = {
            username: this.user.username,
            password: this.user.password,
            admin: this.user.admin==true||this.user.admin=="true"? true:false
          }
          this.userService.createUser(dataSchema1).then((response)=>{
            if(response.data.code==2000){
              this.closeModal("modalAddUser");
              window.location.pathname="admin";
            }else{
              this.backendReject = response.data.message;
            }
          }).catch((err)=>{
            console.log(err);
          });
          break;
        case 'edit':
          if(this.sentUser){
            let dataSchema2 = {
              username: this.sentUser.username,
              password: this.sentUser.password,
              admin: this.sentUser.admin==true||this.sentUser.admin=="true"? true:false
            }
            this.userService.updateUser(this.sentUser.id, dataSchema2).then((response)=>{
              if(response.data.code==2000){
                this.closeModal("modalEditUser");
                window.location.pathname="admin";
              }else{
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

  closeModal(id: string){
    let modalElelent: any = document.getElementById(id);
    let modal: any = Modal.getInstance(modalElelent);
    modal.hide();
  }

  

  validarForm(f: NgForm): boolean{
    let valid: boolean = true;
    if(f.controls['username'].status=='INVALID'){
      valid = false;
      this.usernameError = "Debe introducir un nombre de usuario";
    }
    if(f.controls['pass'].status=='INVALID'){
      valid = false;
      if(f.controls['pass'].hasError("pattern")){
        this.passwordError = "Debe introducir una contraseña de 4 o más caracteres";
      }else{
        this.passwordError = "Debe introducir una contraseña";
      }
    }
    return valid;
  }
}
