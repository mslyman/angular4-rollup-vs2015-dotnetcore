import { Component } from "@angular/core";

@Component({
	moduleId: module.id, 
    selector: 'ponyracer-app',
    template: `
<h1 [innerText]="myname"></h1>
<ns-races [races]="getRaces()"></ns-races>
`
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
}