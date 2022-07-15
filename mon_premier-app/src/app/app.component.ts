import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mahazoLalana = false;

  fit1 = "jiro ampoule";
  fit2 = "bafla";
  fit3 = "télé"

  constructor() {
    // timeout changer la valeur de mahazoLalana en vrai après 3s
    setTimeout(() => {
      this.mahazoLalana = true;
    }, 3000);
  }
  onVelomina() {
    alert("Nivelominao daholo ny fitaovana")
  }
}
