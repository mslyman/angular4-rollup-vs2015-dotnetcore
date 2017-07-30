import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

var m = AppModule;
var pf = platformBrowserDynamic;
pf().bootstrapModule(AppModule);