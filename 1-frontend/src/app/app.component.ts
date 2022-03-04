import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Proyecto Angular de Eusebio López Robledo';
  name: string = "Eusebio López Robledo";
  mail: string = "eusebio.lopez.robledo.alu@iesjulioverne.es";
  company: string = "I.E.S. Julio Verne - Sevilla";
  public logged: string|any = sessionStorage.getItem('login');

  constructor() {}

  ngOnInit(): void {
    
  }

  login(result: any){
    if(result){
      sessionStorage.setItem('idUser', result._id)
      sessionStorage.setItem('login', 'logged');
      window.location.pathname = "";
    }
  }
}
