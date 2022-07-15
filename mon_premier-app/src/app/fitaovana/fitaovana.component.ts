import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fitaovana',
  templateUrl: './fitaovana.component.html',
  styleUrls: ['./fitaovana.component.css']
})
export class FitaovanaComponent implements OnInit {

  @Input() anaranaFit: string;
  @Input() toetraFit: string;

  constructor() { }

  ngOnInit(): void {
  }

  getToetrany() {
    return this.toetraFit;
  }

}
