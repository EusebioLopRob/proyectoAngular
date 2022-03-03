import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class Footer implements OnInit {

  @Input() name: string | undefined
  @Input() mail: string | undefined
  @Input() company: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}