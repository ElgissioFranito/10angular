import { Component, OnInit } from '@angular/core';
import { FitaovanaService } from './services/fitaovana.service';  // import de service FitaovanaService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mahazoLalana = false;

  upDat = new Date();

  // appareils = [
  //   {
  //     nom: "Jiro ampoule",
  //     status: "velona"
  //   },
  //   {
  //     nom: "sibofera",
  //     status: "maty"
  //   },
  //   {
  //     nom: "Télé",
  //     status: "velona"
  //   },
  // ]

  // On va profiter un peut de nos services 
  appareils: any[];


  constructor(private fitaovanaService: FitaovanaService) {               // injection: créer un variable dans le constructor pour utiliser les services, sans oublier de l'importer en haut 
    // timeout changer la valeur de mahazoLalana en vrai après 3s
    setTimeout(() => {
      this.mahazoLalana = true;
    }, 3000);
  }


  ngOnInit() {
    this.appareils = this.fitaovanaService.appareils;
  }


  onVelomina() {
    this.fitaovanaService.velomina();
  }
  onVonoina() {
    this.fitaovanaService.vonoina();
  }
}
