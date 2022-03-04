import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class Navbar implements OnInit {

  constructor(private adminService: AdminService) { }
  public admin: boolean = false;
  async ngOnInit(): Promise<void> {
    this.admin = await this.adminService.isUserAdmin()
  }
}
