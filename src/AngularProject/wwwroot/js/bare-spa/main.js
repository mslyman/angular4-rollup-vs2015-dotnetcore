"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var m = app_module_1.AppModule;
var pf = platform_browser_dynamic_1.platformBrowserDynamic;
pf().bootstrapModule(app_module_1.AppModule);
