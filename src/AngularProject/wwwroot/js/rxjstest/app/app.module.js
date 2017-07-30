"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
//let currentNameSubject = new BehaviorSubject('Eric');
//currentNameSubject.subscribe((val: string) => {
//    console.log(val);
//    dv.innerHTML += `<p>${val}</p>`;
//})
//currentNameSubject.next('Obama');
//currentNameSubject.next('Donald');
//var list: NodeList = dv.getElementsByTagName('p');
var time = 1000;
var delay = function (time) { return new Promise(function (resolve) { return setTimeout(resolve, time); }); };
function sleepRandom(time) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delay(time * 1e3)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, 0 | Math.random() * 1e3];
            }
        });
    });
}
;
function sleepError(time, msg) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delay(time * 1e3)];
                case 1:
                    _a.sent();
                    throw Error(msg);
            }
        });
    });
}
;
(function () { return __awaiter(_this, void 0, void 0, function () {
    var _a, _b, _c, _d, a, b, c, e_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 4, , 5]);
                console.log('Run'); // => Run
                _b = (_a = console).log;
                return [4 /*yield*/, sleepRandom(5)];
            case 1:
                _b.apply(_a, [_e.sent()]); // => 936, after 5 sec.
                return [4 /*yield*/, Promise.all([
                        sleepRandom(5),
                        sleepRandom(15),
                        sleepRandom(10)
                    ])];
            case 2:
                _d = _e.sent(), a = _d[0], b = _d[1], c = _d[2];
                console.log(a, b, c); // => 210 445 71, after 15 sec.
                return [4 /*yield*/, sleepError(5, 'Irror!')];
            case 3:
                _e.sent();
                console.log('Will not be displayed');
                return [3 /*break*/, 5];
            case 4:
                e_1 = _e.sent();
                console.log(e_1); // => Error: 'Irror!', after 5 sec.
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); })();
function getx() {
    return "test5";
}
exports.getx = getx;
;
