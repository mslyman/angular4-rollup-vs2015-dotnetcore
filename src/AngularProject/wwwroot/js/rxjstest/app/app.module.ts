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

//let currentNameSubject = new BehaviorSubject('Eric');
//currentNameSubject.subscribe((val: string) => {
//    console.log(val);
//    dv.innerHTML += `<p>${val}</p>`;
//})
//currentNameSubject.next('Obama');
//currentNameSubject.next('Donald');

//var list: NodeList = dv.getElementsByTagName('p');
var time = 1000;
var delay = (time: number) => new Promise(resolve => setTimeout(resolve, time))
async function sleepRandom(time: number) {
    await delay(time * 1e3);
    return 0 | Math.random() * 1e3;
};
async function sleepError(time: number, msg: string) {
    await delay(time * 1e3);
    throw Error(msg);
};

(async () => {
    try {
        console.log('Run');                // => Run
        console.log(await sleepRandom(5)); // => 936, after 5 sec.
        var [a, b, c] = await Promise.all([
            sleepRandom(5),
            sleepRandom(15),
            sleepRandom(10)
        ]);
        console.log(a, b, c);              // => 210 445 71, after 15 sec.
        await sleepError(5, 'Irror!');
        console.log('Will not be displayed');
    } catch (e) {
        console.log(e);                    // => Error: 'Irror!', after 5 sec.
    }
})();


export function getx() {
    return "test5";
};