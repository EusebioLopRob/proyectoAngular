import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class Userlist implements OnInit {

  @Output() sendUserId = new EventEmitter<string>();
  @Output() sendUserObject = new EventEmitter<Usuario>();
  public userlist: any = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.populateUserlist();
  }
  populateUserlist(){
    this.userService.getAllUsers()
      .then( (response) => {
        let respuesta = response.data.data;
        respuesta.forEach((element: { _id: string, username: string, password: string, admin: boolean }) => {
          let usuario = new Usuario(element._id, element.username, element.password, element.admin)
          this.userlist.push(usuario);
        });
      }).catch((err)=>{
        console.log(err);
      });
  }
  sendId(id: string){
    this.sendUserId.emit(id);
  }
  sendUser(user: Usuario){
    this.sendUserObject.emit(user);
  }
}
