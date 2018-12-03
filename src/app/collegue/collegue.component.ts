import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../app.model';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input() collegue: Collegue;

  constructor() {

  }

  ngOnInit() {
  }


  // Method for increment or decrement 
  onAvis(unAvis:Avis) {
    if(unAvis == Avis.AIMER) {
      this.collegue.score += 100
    } else {
      this.collegue.score -=100
    }
  }

}