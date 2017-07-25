import { BehaviorSubject } from "rxjs/BehaviorSubject";

//import { BehaviorSubject } from '/node_modules/@reactivex/rxjs/dist/cjs/BehaviorSubject.js'

export function getx(){
        let currentNameSubject = new BehaviorSubject('Eric');
        currentNameSubject.subscribe((val: string) => {
            console.log(val);

        })
        currentNameSubject.next('Obama');
        currentNameSubject.next('Donald');	
	return "test5";
};