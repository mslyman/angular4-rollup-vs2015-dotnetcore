import { Component, Input, OnInit } from '@angular/core';
import { RaceService } from "./race.service";

//import { LogService } from './log.service';

@Component({
    selector: 'ns-races',
    styles: ['.odd {background-color:#ccc;}'],
    template: `<div *ngIf="races && races.length > 0">
  <h2>- Races -</h2>
  <ul>
   <li *ngFor="let race of races2; let i=index; let o=odd" [class.odd]="o">
        <span [id]="i">{{i}} - {{race.name}}</span>
    </li>
  </ul>
  </div>`,
    //providers: [RaceService, LogService]
})
export class RacesComponent implements OnInit {
    
    constructor(private raceService: RaceService) {
        
    }
    ngOnInit() {
        this.races2 = this.raceService.list();
    }


    @Input()   
    races: Array<any>;

    races2: any; 
}
