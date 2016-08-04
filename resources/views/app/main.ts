import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { appRouterProvider } from './app.routes';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [
    appRouterProvider,
    HTTP_PROVIDERS
]);
