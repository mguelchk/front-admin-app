import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-admin-app';
  constructor() { 
    localStorage.setItem('numeroCuentas', '0');
  }
}




