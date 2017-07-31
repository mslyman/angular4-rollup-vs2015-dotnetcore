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
var http_1 = require("../../utils/http");
var http_2 = require("@angular/common/http");
var log_service_1 = require("../utils/log.service");
require("rxjs/add/observable/from");
require("rxjs/add/operator/map");
var RaceService = (function () {
    function RaceService(logService, httpMy, http) {
        this.logService = logService;
        this.httpMy = httpMy;
        this.http = http;
    }
    RaceService.prototype.list = function () {
        this.logService.write("logger: get data...");
        this.http.get('/ninja/races').subscribe(function (data) {
            console.log(data);
        });
        var xx = http_1.test1;
        var p = this.httpMy.get('/ninja/races');
        var pp = p.promise;
        return pp;
    };
    return RaceService;
}());
RaceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [log_service_1.LogService, http_1.Http, http_2.HttpClient])
], RaceService);
exports.RaceService = RaceService;
