import { provideRouter, RouterConfig }  from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

const routes: RouterConfig = [
    {
        path: 'home',
        component: HomeComponent
    }
];

export const appRouterProvider = [
    provideRouter(routes)
];