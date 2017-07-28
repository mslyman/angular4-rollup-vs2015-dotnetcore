import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/dom/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/interval';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeWhile';
import { Http } from "../../utils/http";

var stream1 = Observable
    .interval(1000)
    .subscribe(x => console.log(x));



var promise = Http.Post('/Home/TestPost2', { param1: "value1" }).promise;
var stream = Observable.fromPromise(promise);
stream.subscribe(x => console.log(x), x => console.log('error: ' + x), () => console.log('complete'));




export function getx() {
    //let currentNameSubject = new BehaviorSubject('Eric');
    //currentNameSubject.subscribe((val: string) => {
    //    console.log(val);
    //});
    //currentNameSubject.next('Obama');
    //currentNameSubject.next('Donald');	


    return "test5";
};