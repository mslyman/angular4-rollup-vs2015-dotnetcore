interface IRequestResult<T> {
    promise: Promise<T>,
    xhr: XMLHttpRequest
}



export var test1 = "test#1";

export class Http {
    public get<T>(url: string, data?: object, headers?: any[]): IRequestResult<T> {
        url = this.assignUrlParameters(url, data);
        return this.request<T>('GET', url, data, headers);
    }

    public post<T>(url: string, data?: object, headers?: any[]) {
        return this.request<T>('POST', url, data, headers);
    }

    public assignUrlParameters(url: string, data?: object): string {
        if (data) {
            var p = this.getUrlParameters(url);
            Object.keys(data).forEach(key => {
                key = key.toLowerCase();
                p[key] = data[key];
            });
            // Remove '?''
            if (url.indexOf('?') >= 0) {
                url = url.substring(0, url.indexOf('?'));
            }
            var pps: string[] = [];
            Object.keys(p).forEach(key => {
                pps.push(`${key}=${p[key]}`);
            });
            if (pps.length) {
                url += '?' + pps.join('&');
            }
        }
        return url;
    }

    public getUrlParameters(url: string): object {
        var q = url.split('?').pop();
        var chunks = q.split('&'),
            obj = {};
        for (var c = 0; c < chunks.length; c++) {
            var split = chunks[c].split('=', 2);
            obj[split[0].toLowerCase()] = split[1];
        }
        return obj;
    }

    public request<T>(method: string, url: string, data?: object | string, headers?: object): IRequestResult<T> {
        headers = headers || {};
        var xhr = new XMLHttpRequest();
        var promise = new Promise(function (resolve, reject) {
            xhr.open(method, url, true);
            xhr.onload = () => {
                var status = xhr.status,
                    statusText = xhr.statusText,
                    response = xhr.response;
                if (status >= 200 && status < 300) {
                    if (xhr.getResponseHeader("Content-Type").indexOf('/json') >= 0) {
                        response = JSON.parse(response);
                    }
                    //console.log(`xhr.onload1 status=${status}`);
                    xhr = null;
                    resolve(response);
                } else {
                    //console.log(`xhr.onload1 status=${status} statusText=${statusText}`);
                    xhr = null;
                    reject(statusText);
                }
            };
            xhr.onerror = () => {
                var status = xhr.status,
                    statusText = xhr.statusText;
                console.log(`xhr.onerror status=${status} statusText=${statusText}`);
                xhr = null;
                reject(statusText);
            };
            // Request headers
            if (headers) {
                Object.keys(headers).forEach(key => {
                    xhr.setRequestHeader(key, headers[key]);
                });
            }
            // Default request headers
            if (!headers["Accept"]) {
                xhr.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
            }
            if (!headers["Content-Type"]) {
                xhr.setRequestHeader("Content-Type", "application/json");
                if (method !== 'GET' && typeof data === "object") {
                    data = JSON.stringify(data);
                }
            }
            if (!headers["X-Requested-With"]) {
                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            }
            if (method !== 'GET') {
                xhr.send(data);
            }
            else {
                xhr.send();
            }
        });
        return {
            promise: promise,
            xhr: xhr
        }
    }

}




/*
 //   Usage:
var http = new Http();
var r = http.Get(url);
r
    .promice
    .then(x => console.log(x))
    .catch(x => console.log(x));
// Abort request, if needed
r.xhr.abort();
// Post
http.Post('/Home/TestPost2', { param1: "value1" }).promise.then(x => console.log(x))
// Server code
        [HttpPost]
        public BaseResponse TestPost2([FromBody]TestRequest1 request)
        {
            var response = new BaseResponse()
            {
                Result = $"Ok. param1={request.param1}"
            };
            return response;            
        }
// use async
(async () => {
    console.log('start');
    var p = http.Get(url0).promise;
    p.then(x => console.log(x));
    await p;
    console.log('end');
})();
console.log('1');
// returns
start
1
result
end
// Use with RxJs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
var http = new Http();
var promise = http.Post('/Home/TestPost2x', { param1: "value1" }).promise;
var stream = Observable.fromPromise(promise);
stream.subscribe(x => console.log(x), x => console.log('error: ' + x), () => console.log('complete')); // on error, complete not called
*/