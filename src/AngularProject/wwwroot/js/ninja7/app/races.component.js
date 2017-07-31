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
var race_service_1 = require("./race.service");
var RacesComponent = (function () {
    function RacesComponent(raceService) {
        this.raceService = raceService;
    }
    RacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.raceService.list().then(function (d) { return _this.races2 = d; });
        }, 1000);
    };
    return RacesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], RacesComponent.prototype, "races", void 0);
RacesComponent = __decorate([
    core_1.Component({
        selector: 'ns-races',
        styles: ['.odd {background-color:#ccc;}'],
        template: "<div *ngIf=\"races && races.length > 0\">\n\u00A0 <h2>- Races -</h2>\n\u00A0 <ul>\n\u00A0  <li *ngFor=\"let race of races2; let i=index; let o=odd\" [class.odd]=\"o\">\n        <span [id]=\"i\">{{i}} - {{race.name}}</span>\n    </li>\n\u00A0 </ul>\n\u00A0 </div>",
    }),
    __metadata("design:paramtypes", [race_service_1.RaceService])
], RacesComponent);
exports.RacesComponent = RacesComponent;
