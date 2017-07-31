import { Component } from "@angular/core";
//import { RaceService } from './race.service';

@Component({
	moduleId: module.id, 
    selector: 'ponyracer-app',
    template: `
<h1 [innerText]="myname"></h1>
<ns-races [races]="getRaces()"></ns-races>
`,
    //providers: [RaceService]
})
export class AppComponent { 
    myname = "Mike3";

    isPonySelected = true;
    onButtonClick() {
        this.isPonySelected = !this.isPonySelected;
    }
    onNewRace() {
        alert('New race!');
    }
    getRaces(): any[] {
        return [{ name: 'London' }, { name: 'Lyon' }];
    }
    constructor() {
        //setTimeout(() => this.isPonySelected = false, 2000);

    }
    list() {
        ///return this.raceService.list();
    }

}