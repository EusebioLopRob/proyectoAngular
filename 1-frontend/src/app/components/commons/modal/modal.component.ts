import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class Modal implements OnInit {

  @Input() id: string | undefined
  @Input() title: string | undefined
  @Input() footer: boolean | undefined = false;

  constructor() { }

  ngOnInit(): void {
  }

}