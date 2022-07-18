import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fitaovana',
  templateUrl: './fitaovana.component.html',
  styleUrls: ['./fitaovana.component.css']
})
export class FitaovanaComponent implements OnInit {

  // il faut importer Input avant de l'ituliser dans le component
  @Input() anaranaFit: string;
  @Input() toetraFit: string;

  constructor() { }

  ngOnInit(): void {
  }

  getToetrany() {
    return this.toetraFit;
  }

  getColor() {
    if (this.toetraFit === "velona") {
      return "green"
    } else {
      return "red"
    }
  }

}
