import { Injectable } from '@angular/core';
import { test1, Http } from '../../utils/http';  // my
import { HttpClient } from '@angular/common/http';  // standart
import { LogService } from '../utils/log.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

@Injectable()
export class RaceService {
    //private http: Http;
    constructor(private logService: LogService, private httpMy: Http, private http: HttpClient) {
        //this.http = Http;
    }

    list<T>() {
        this.logService.write("logger: get data...");

        this.http.get('/ninja/races').subscribe(data => {
            console.log(data);
        });
    

        //var p = Http.Get('/ninja/races').promise;
        //return Observable.fromPromise(p);
        //this.http.Get('/ninja/races');
        var xx = test1;
        var p = this.httpMy.get<T>('/ninja/races');
        var pp = p.promise;
        //console.log(pp);
        //pp.then(d => console.log(d));
        //return [{ name: 'test1'}, {name: 'test2'}];
        return pp;

           // .then(x => { return x });
    }

    //get(id: string) { //: Promise<Bundle>
    //    return Http
    //        .Get(`/Race/`)
    //        //.toPromise();
    //}

}
