"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test1 = "test#1";
var Http = (function () {
    function Http() {
    }
    Http.prototype.get = function (url, data, headers) {
        url = this.assignUrlParameters(url, data);
        return this.request('GET', url, data, headers);
    };
    Http.prototype.post = function (url, data, headers) {
        return this.request('POST', url, data, headers);
    };
    Http.prototype.assignUrlParameters = function (url, data) {
        if (data) {
            var p = this.getUrlParameters(url);
            Object.keys(data).forEach(function (key) {
                key = key.toLowerCase();
                p[key] = data[key];
            });
            if (url.indexOf('?') >= 0) {
                url = url.substring(0, url.indexOf('?'));
            }
            var pps = [];
            Object.keys(p).forEach(function (key) {
                pps.push(key + "=" + p[key]);
            });
            if (pps.length) {
                url += '?' + pps.join('&');
            }
        }
        return url;
    };
    Http.prototype.getUrlParameters = function (url) {
        var q = url.split('?').pop();
        var chunks = q.split('&'), obj = {};
        for (var c = 0; c < chunks.length; c++) {
            var split = chunks[c].split('=', 2);
            obj[split[0].toLowerCase()] = split[1];
        }
        return obj;
    };
    Http.prototype.request = function (method, url, data, headers) {
        headers = headers || {};
        var xhr = new XMLHttpRequest();
        var promise = new Promise(function (resolve, reject) {
            xhr.open(method, url, true);
            xhr.onload = function () {
                var status = xhr.status, statusText = xhr.statusText, response = xhr.response;
                if (status >= 200 && status < 300) {
                    if (xhr.getResponseHeader("Content-Type").indexOf('/json') >= 0) {
                        response = JSON.parse(response);
                    }
                    xhr = null;
                    resolve(response);
                }
                else {
                    xhr = null;
                    reject(statusText);
                }
            };
            xhr.onerror = function () {
                var status = xhr.status, statusText = xhr.statusText;
                console.log("xhr.onerror status=" + status + " statusText=" + statusText);
                xhr = null;
                reject(statusText);
            };
            if (headers) {
                Object.keys(headers).forEach(function (key) {
                    xhr.setRequestHeader(key, headers[key]);
                });
            }
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
        };
    };
    return Http;
}());
exports.Http = Http;
