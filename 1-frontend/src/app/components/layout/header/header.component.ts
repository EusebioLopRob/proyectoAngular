import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class Header implements OnInit {

  //Variable importada
  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
