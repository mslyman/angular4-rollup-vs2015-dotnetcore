import { NgModule } from "@angular/core";
import { Http } from '../../utils/http';
import { HttpClientModule } from '@angular/common/http';
//import { Http } from '@angular/http';
//import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { RacesComponent } from "./races.component";
import { PoniesComponent } from "./ponies.component";

import { RaceService } from "./race.service";
import { LogService } from '../utils/log.service';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ AppComponent, RacesComponent ],
    bootstrap: [AppComponent],
    providers: [RaceService, LogService, Http]
})

export class AppModule { }