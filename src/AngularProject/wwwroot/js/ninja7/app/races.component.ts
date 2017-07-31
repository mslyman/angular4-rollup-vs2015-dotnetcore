import { Component, Input, OnInit } from '@angular/core';
import { RaceService } from "./race.service";
//import { test1 } from './http1';
//import { LogService } from './log.service';

interface IRace {
    name: string;
}

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
    @Input()
    races: Array<any>; // from parent component

    races2: IRace[]; // from service

    constructor(private raceService: RaceService) {
        
    }
    ngOnInit() {
        setTimeout(() => {
            this.raceService.list<IRace[]>().then(d => this.races2 = d);
        }, 1000);       
    }
    
}
