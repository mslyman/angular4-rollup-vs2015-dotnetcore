"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { RaceService } from './race.service';
var AppComponent = (function () {
    function AppComponent() {
        //setTimeout(() => this.isPonySelected = false, 2000);
        this.myname = "Mike3";
        this.isPonySelected = true;
    }
    AppComponent.prototype.onButtonClick = function () {
        this.isPonySelected = !this.isPonySelected;
    };
    AppComponent.prototype.onNewRace = function () {
        alert('New race!');
    };
    AppComponent.prototype.getRaces = function () {
        return [{ name: 'London' }, { name: 'Lyon' }];
    };
    AppComponent.prototype.list = function () {
        ///return this.raceService.list();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ponyracer-app',
        template: "\n<h1 [innerText]=\"myname\"></h1>\n<ns-races [races]=\"getRaces()\"></ns-races>\n",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
