//import { Http } from 'myutils/http';
import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { test1 } from './http1';
import { LogService } from './log.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/toPromise';

@Injectable()
export class RaceService {
    //private http: Http;
    constructor(private logService: LogService) {
        //this.http = Http;
    }

    list() {
        this.logService.write("logger: get data...");
        //var p = Http.Get('/ninja/races').promise;
        //return Observable.fromPromise(p);
        //Http.Get('/ninja/races');
        var xx = test1;

        return [{ name: 'test1'}, {name: 'test2'}];


           // .then(x => { return x });
    }

    //get(id: string) { //: Promise<Bundle>
    //    return Http
    //        .Get(`/Race/`)
    //        //.toPromise();
    //}

}
