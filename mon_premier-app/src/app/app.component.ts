import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mahazoLalana = false;

  upDat = new Date;

  appareils = [
    {
      nom: "Jiro ampoule",
      status: "velona"
    },
    {
      nom: "sibofera",
      status: "maty"
    },
    {
      nom: "Télé",
      status: "velona"
    },
  ]

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
