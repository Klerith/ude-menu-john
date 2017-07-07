import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public menuUsuario= [{nombre:'menu1',url:'pag1'},{nombre:'menu2',url:'pag2'},{nombre:'menu3',url:'pag3'}];
}
