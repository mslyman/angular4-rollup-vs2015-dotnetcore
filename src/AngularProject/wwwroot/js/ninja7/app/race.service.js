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
//import { Http } from 'myutils/http';
var core_1 = require("@angular/core");
//import { Http } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
var http1_1 = require("./http1");
var log_service_1 = require("./log.service");
require("rxjs/add/observable/from");
require("rxjs/add/operator/map");
//import 'rxjs/add/observable/toPromise';
var RaceService = (function () {
    //private http: Http;
    function RaceService(logService) {
        this.logService = logService;
        //this.http = Http;
    }
    RaceService.prototype.list = function () {
        this.logService.write("logger: get data...");
        //var p = Http.Get('/ninja/races').promise;
        //return Observable.fromPromise(p);
        //Http.Get('/ninja/races');
        var xx = http1_1.test1;
        return [{ name: 'test1' }, { name: 'test2' }];
        // .then(x => { return x });
    };
    return RaceService;
}());
RaceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [log_service_1.LogService])
], RaceService);
exports.RaceService = RaceService;
