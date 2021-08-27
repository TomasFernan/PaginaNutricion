import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Pagina Nutricion';

  clients = [
    {'name': 'Tomas', 'lastName': 'Fernandez', 'email': 'ejemplo1@gmail.com'},
    {'name': 'Luciana', 'lastName': 'Godio', 'email': 'ejemplo2@gmail.com'}
  ]

  model:any = {};

  addClient():void{
    this.clients.push(this.model);
  }

  deleteClient():void{

  }

  editClient():void{

  }

  updateClient():void{

  }


}
