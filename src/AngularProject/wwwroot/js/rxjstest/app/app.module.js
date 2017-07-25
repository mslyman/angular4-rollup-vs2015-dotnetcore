"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
//import { BehaviorSubject } from '/node_modules/@reactivex/rxjs/dist/cjs/BehaviorSubject.js'
function getx() {
    var currentNameSubject = new BehaviorSubject_1.BehaviorSubject('Eric');
    currentNameSubject.subscribe(function (val) {
        console.log(val);
    });
    currentNameSubject.next('Obama');
    currentNameSubject.next('Donald');
    return "test5";
}
exports.getx = getx;
;
