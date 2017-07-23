import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../../aot/wwwroot/js/bare-spa/app/app.module.ngfactory';
import { enableProdMode } from '@angular/core';

enableProdMode();

//console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);