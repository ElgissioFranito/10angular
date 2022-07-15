import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Pour employer le TwoWaysBindding, il faut importer FormsModule dans @angular/forms
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './composants/utilisateur/utilisateur.component';
import { FitaovanaComponent } from './fitaovana/fitaovana.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
