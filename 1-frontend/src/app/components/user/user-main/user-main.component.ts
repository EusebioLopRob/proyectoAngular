import { AfterContentInit, Component, EventEmitter, Output } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMain implements AfterContentInit {
  public selectedId: string = "";
  public adminConfirmed: boolean = false;
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
        window.location.pathname="user-main";
      }
    })
  }
  getUserId(id: string){
    this.selectedId = id;
  }
}


