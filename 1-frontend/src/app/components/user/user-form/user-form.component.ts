import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UserService } from '../../services/user.service';
import { Modal } from "bootstrap";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserForm implements OnInit {

  @Input() mode: string | undefined
  @Input() id: string | undefined
  @Output() dologin = new EventEmitter<Object>();
  user: Usuario = new Usuario("","","",false);

  constructor(private userService: UserService) { }

  login(e: MouseEvent) {
    e.preventDefault();
    this.userService.login({username: this.user.username, password: this.user.password}).then((response)=>{
      let datosRespuesta = response.data
      this.dologin.emit(datosRespuesta.data);
    }).catch((err)=>{
      console.log(err);
    });
  }

  performAction(e: MouseEvent){
    e.preventDefault();
    console.log(this.user)
    switch(this.mode){
      case 'add':
        let dataSchema = {
          username: this.user.username,
          password: this.user.password,
          admin: this.user.admin,
        }
        this.userService.createUser(dataSchema).then((response)=>{
          if(response.data.code==2000){
            this.closeModal("modalAddUser");
            window.location.pathname="user-main";
          }
        })
        break;
      case 'edit':
        break;
    }
  }

  closeModal(id: string){
    let modalElelent: any = document.getElementById(id);
    let modal: any = Modal.getInstance(modalElelent);
    modal.hide();
  }

  ngOnInit(): void {
    if(this.id){

    }
  }
  
}
