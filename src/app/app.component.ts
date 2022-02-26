import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';
  getAxiosData(){
    var api = "http://localhost:8091/user/data";
    axios.get(api)
      .then(function (response) {
        console.log(response);
      });
  }
}
