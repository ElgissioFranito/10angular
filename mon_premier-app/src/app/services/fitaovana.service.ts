// Les services permettent de regrouper(centraliser) les données et les fonctionalités des components comme les variables, fonctions,...
// et les transmettre etre eux(components).
// il doit etre "injecter"
// (03 niveau  d'injection selon les besoin: 
// dans app.module: dispo pour tous les components et tous les services
// dans app.component: dispo pour tous components mais pas pour tous les services
// dans les composants fils: dispo seulement pour ce component et les component fils

export class FitaovanaService {

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
    ];

    velomina() {
        for (let aparay of this.appareils) {
            aparay.status = "velona";
        }
    }

    vonoina() {
        for (let aparay of this.appareils) {
            aparay.status = "maty";
        }
    }

}
