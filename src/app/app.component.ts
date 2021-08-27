import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Pagina Nutricion';

  clients = [
    {'name': 'Tomas', 'lastName': 'Fernandez', 'age': '22'},
    {'name': 'Luciana', 'lastName': 'Godio', 'age': '24'}
  ]

  model:any = {};

  addClient():void{

  }

  deleteClient():void{

  }

  editClient():void{

  }

  updateClient():void{

  }


}
