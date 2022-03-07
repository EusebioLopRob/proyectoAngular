import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class Ficha implements OnInit {
  @Input() data: any;
  public imgBasePath: string = "../../../../assets/img/";
  constructor() { }
  ngOnInit(): void {
  }
}
