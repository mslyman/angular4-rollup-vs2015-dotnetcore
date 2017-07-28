"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/observable/dom/ajax");
require("rxjs/add/observable/of");
require("rxjs/add/observable/from");
require("rxjs/add/observable/fromPromise");
require("rxjs/add/observable/interval");
require("rxjs/add/operator/map");
require("rxjs/add/operator/distinct");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/reduce");
require("rxjs/add/operator/scan");
require("rxjs/add/operator/take");
require("rxjs/add/operator/takeWhile");
var http_1 = require("../../utils/http");
var stream1 = Observable_1.Observable
    .interval(1000)
    .subscribe(function (x) { return console.log(x); });
var promise = http_1.Http.Post('/Home/TestPost2', { param1: "value1" }).promise;
var stream = Observable_1.Observable.fromPromise(promise);
stream.subscribe(function (x) { return console.log(x); }, function (x) { return console.log('error: ' + x); }, function () { return console.log('complete'); });
function getx() {
    //let currentNameSubject = new BehaviorSubject('Eric');
    //currentNameSubject.subscribe((val: string) => {
    //    console.log(val);
    //});
    //currentNameSubject.next('Obama');
    //currentNameSubject.next('Donald');	
    return "test5";
}
exports.getx = getx;
;
