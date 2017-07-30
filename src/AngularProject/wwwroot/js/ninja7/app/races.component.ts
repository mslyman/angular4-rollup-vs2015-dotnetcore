import { Component, Input } from '@angular/core';


@Component({
    selector: 'ns-races',
    styles: ['.odd {background-color:#ccc;}'],
    template: `<div *ngIf="races && races.length > 0">
  <h2>- Races -</h2>
  <ul>
   <li *ngFor="let race of races; let i=index; let o=odd" [class.odd]="o">
        <span [id]="i">{{i}} - {{race.name}}</span>
    </li>
  </ul>
  </div>`
})
export class RacesComponent {


    @Input()   
    races: Array<any>;

}
