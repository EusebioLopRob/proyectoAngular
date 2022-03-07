import { Component, OnInit } from '@angular/core';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home implements OnInit {
  public ships: any = [];
  constructor(private shipService: ShipService) { }
  ngOnInit(): void {
    this.shipService.getAllShips().then((response)=>{
      let responseData = response.data;
      if(responseData.code == 2000){
        this.ships = responseData.data;
      }
    }).catch((err)=>{
      console.log("Error al solicitar datos de barcos: "+err);
    });
  }
}