import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  logout(){
    sessionStorage.clear();
    window.location.pathname = "";
  }
}