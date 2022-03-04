import { AfterContentInit, Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { AdminService } from '../../../services/admin.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMain implements AfterContentInit {
  public selectedId: string = "";
  public selectedUser: Usuario | undefined
  public adminConfirmed: boolean = false;
  public backendReject: string = "";
  public logMessage: string = "";
  constructor(private adminService: AdminService, private userService: UserService) { }
  async ngAfterContentInit(): Promise<void> {
    if(!await this.adminService.isUserAdmin()){
      window.location.pathname = "error"
    }else{
      this.adminConfirmed = true;
    }
  }
  confirmDelete(){
    this.userService.deleteUser(this.selectedId).then((response)=>{
      if(response.data.code==2000){
        window.location.pathname="admin";
      }else{
        this.backendReject = response.data.message;
      }
    })
  }
  getUserId(id: string){
    this.backendReject = "";
    this.selectedId = id;
  }
  getUserObject(user: Usuario){
    this.selectedUser = user;
  }
}


