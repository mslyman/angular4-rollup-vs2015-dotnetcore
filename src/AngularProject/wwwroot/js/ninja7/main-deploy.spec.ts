import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../../aot/wwwroot/js/ninja7/app/app.module.ngfactory';
import { enableProdMode } from '@angular/core';

enableProdMode();

//console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);