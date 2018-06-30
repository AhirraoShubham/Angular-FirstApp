import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosystem';
  Registration;
  public flag = true;
  public register()
  {
    this.flag = false;
    this.Registration="Registration Page";  
  }
}