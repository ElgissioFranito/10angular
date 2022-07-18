import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Pour employer le TwoWayBinding, il faut importer FormsModule dans @angular/forms (ngModel,ngStyle,ngClass)
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './composants/utilisateur/utilisateur.component';
import { FitaovanaComponent } from './fitaovana/fitaovana.component';

// importation de FitaovanaService
import { FitaovanaService } from './services/fitaovana.service';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    FitaovanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule                       // mettre "formsModule" dans import après l'avoir importer en haut
  ],
  providers: [
    FitaovanaService                  // mettre les service ici
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
